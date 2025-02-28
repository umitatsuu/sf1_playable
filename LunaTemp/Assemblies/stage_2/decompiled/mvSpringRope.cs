using System;
using UnityEngine;

public class mvSpringRope : MonoBehaviour
{
	public float ropeWidth = 0.05f;

	public int quality = 500;

	public float damper = 3f;

	public float strength = 100f;

	public float velocity = 60f;

	public float waveCount = 3f;

	public float waveHeight = 1f;

	public float ropeSpeed = 5f;

	public AnimationCurve affectCurve = new AnimationCurve(new Keyframe(0f, 0f), new Keyframe(0.6f, 0.6f), new Keyframe(1f, 0f));

	private mvSpring spring;

	public LineRenderer lineRenderer;

	private Transform throwTransform;

	private Transform throwTransform1;

	[HideInInspector]
	public Transform targetPosition;

	private Vector3 currentGrapplePosition;

	[HideInInspector]
	public bool isOnAction = false;

	private bool releaseImmediately = true;

	private int releaseQuality;

	private void Start()
	{
		lineRenderer.useWorldSpace = true;
		lineRenderer.startWidth = ropeWidth;
		lineRenderer.endWidth = ropeWidth;
		spring = new mvSpring();
		spring.SetTarget(0f);
	}

	public void SetThrowTransform(Transform target)
	{
		throwTransform = target;
		throwTransform1 = target;
	}

	public void SetThrowTransform(Transform target, Transform subTarget)
	{
		throwTransform = target;
		throwTransform1 = subTarget;
	}

	public void Throw(Transform target)
	{
		if (throwTransform == null)
		{
			Debug.LogError("[MIS-GrapplingRope]throwTransform must be set");
			return;
		}
		isOnAction = true;
		targetPosition = target;
		if (!(targetPosition.position == Vector3.zero))
		{
			float distance = (targetPosition.position - throwTransform.position).magnitude;
			releaseImmediately = true;
		}
	}

	public void Release(bool immediate = true)
	{
		isOnAction = false;
		releaseImmediately = immediate;
	}

	private void LateUpdate()
	{
		UpdateSpringRope();
	}

	private void UpdateSpringRope()
	{
		if (throwTransform == null)
		{
			return;
		}
		if (isOnAction)
		{
			if (lineRenderer.positionCount == 0)
			{
				spring.SetVelocity(velocity);
				lineRenderer.positionCount = quality + 1;
				releaseQuality = quality;
			}
			spring.SetDamper(damper);
			spring.SetStrength(strength);
			spring.Update(Time.deltaTime);
			Vector3 up = Quaternion.LookRotation((targetPosition.position - throwTransform.position).normalized) * Vector3.up;
			currentGrapplePosition = Vector3.Lerp(currentGrapplePosition, targetPosition.position, Time.deltaTime * ropeSpeed);
			lineRenderer.SetPosition(0, throwTransform1.position);
			for (int j = 1; j < quality + 1; j++)
			{
				float delta2 = (float)j / (float)quality;
				Vector3 offset2 = up * waveHeight * Mathf.Sin(delta2 * waveCount * 3.14159265f) * spring.Value * affectCurve.Evaluate(delta2);
				lineRenderer.SetPosition(j, Vector3.Lerp(throwTransform.position, currentGrapplePosition, delta2) + offset2);
			}
			return;
		}
		if (releaseImmediately)
		{
			currentGrapplePosition = throwTransform.position;
			spring.Reset();
			lineRenderer.positionCount = 0;
			return;
		}
		spring.Update(Time.deltaTime);
		currentGrapplePosition = Vector3.Lerp(currentGrapplePosition, throwTransform.position, Time.deltaTime * ropeSpeed * 2f);
		Vector3 right = Quaternion.LookRotation((currentGrapplePosition - throwTransform.position).normalized) * Vector3.right;
		if (Mathf.Approximately((currentGrapplePosition - throwTransform.position).sqrMagnitude, 2f))
		{
			releaseImmediately = true;
			return;
		}
		lineRenderer.SetPosition(0, throwTransform1.position);
		for (int i = 1; i < releaseQuality + 1; i++)
		{
			float delta = (float)i / (float)releaseQuality;
			Vector3 offset = right * waveHeight * Mathf.Sin(delta * 2f * 3.14159265f) * spring.Value * affectCurve.Evaluate(delta);
			lineRenderer.SetPosition(i, Vector3.Lerp(throwTransform.position, currentGrapplePosition, delta) + offset);
		}
	}
}
