using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class mvSpring
{
    float strength;
    float damper;
    float target;
    float velocity;
    float value;

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    public void Update(float deltaTime)
    {
        var direction = target - value >= 0 ? 1f : -1f;
        var force = Mathf.Abs(target - value) * strength;
        velocity += (force * direction - velocity * damper) * deltaTime;
        value += velocity * deltaTime;
    }

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    public void Reset()
    {
        velocity = 0f;
        value = 0f;
    }

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    public void SetValue(float value)
    {
        this.value = value;
    }

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    public void SetTarget(float target)
    {
        this.target = target;
    }

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    public void SetDamper(float damper)
    {
        this.damper = damper;
    }

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    public void SetStrength(float strength)
    {
        this.strength = strength;
    }

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    public void SetVelocity(float velocity)
    {
        this.velocity = velocity;
    }

    public float Value => value;
}

public partial class mvSpringRope : MonoBehaviour
{
  /*  [vEditorToolbar("Rope")]*/
    public float ropeWidth = 0.05f;

    public int quality = 500;
    public float damper = 3;
    public float strength = 100;
    public float velocity = 60;
    public float waveCount = 3;
    public float waveHeight = 1;
    public float ropeSpeed = 5f;
    public AnimationCurve affectCurve = new AnimationCurve(new Keyframe(0f, 0f), new Keyframe(0.6f, 0.6f), new Keyframe(1f, 0f));

    // ----------------------------------------------------------------------------------------------------
    // 
    mvSpring spring;
    public LineRenderer lineRenderer;

    Transform throwTransform;
    Transform throwTransform1;
    [HideInInspector] public Transform targetPosition;
    Vector3 currentGrapplePosition;
    [HideInInspector] public bool isOnAction = false;
    bool releaseImmediately = true;
    int releaseQuality;

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    void Start()
    {
        lineRenderer.useWorldSpace = true;
        lineRenderer.startWidth = ropeWidth;
        lineRenderer.endWidth = ropeWidth;

        spring = new mvSpring();
        spring.SetTarget(0);
    }

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
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

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    public void Throw(Transform target)
    {
        if (throwTransform == null)
        {
            Debug.LogError("[MIS-GrapplingRope]throwTransform must be set");
            return;
        }

        isOnAction = true;
        targetPosition = target;

        if (targetPosition.position == Vector3.zero)
            return;

        Vector3 dir = targetPosition.position - throwTransform.position;
        float distance = dir.magnitude;

        releaseImmediately = true;
    }

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    public void Release(bool immediate = true)
    {
        isOnAction = false;
        /*targetPosition.position = Vector3.zero;*/

        releaseImmediately = immediate;
    }

    // ----------------------------------------------------------------------------------------------------
    // 
    // ----------------------------------------------------------------------------------------------------
    void LateUpdate()
    {
        UpdateSpringRope();
    }



    void UpdateSpringRope() {
        if (throwTransform == null)
            return;

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

            var up = Quaternion.LookRotation((targetPosition.position - throwTransform.position).normalized) * Vector3.up;
            currentGrapplePosition = Vector3.Lerp(currentGrapplePosition, targetPosition.position, Time.deltaTime * ropeSpeed);
            lineRenderer.SetPosition(0, throwTransform1.position);

            for (var i = 1; i < quality + 1; i++)
            {
                var delta = i / (float)quality;
                var offset = up * waveHeight * Mathf.Sin(delta * waveCount * Mathf.PI) * spring.Value * affectCurve.Evaluate(delta);

                lineRenderer.SetPosition(i, Vector3.Lerp(throwTransform.position, currentGrapplePosition, delta) + offset);
            }
        }
        else
        {
            if (releaseImmediately)
            {
                currentGrapplePosition = throwTransform.position;

                spring.Reset();
                lineRenderer.positionCount = 0;
            }
            else
            {
                //spring.SetVelocity(velocity);
                //spring.SetDamper(damper * 0.5f);
                //spring.SetStrength(strength);
                spring.Update(Time.deltaTime);

                currentGrapplePosition = Vector3.Lerp(currentGrapplePosition, throwTransform.position, Time.deltaTime * ropeSpeed * 2f);
                var right = Quaternion.LookRotation((currentGrapplePosition - throwTransform.position).normalized) * Vector3.right;

                if (Mathf.Approximately((currentGrapplePosition - throwTransform.position).sqrMagnitude, 2f))
                {
                    releaseImmediately = true;
                    return;
                }

                lineRenderer.SetPosition(0, throwTransform1.position);
                for (var i = 1; i < releaseQuality + 1; i++)
                {
                    var delta = i / (float)releaseQuality;
                    var offset = right * waveHeight * Mathf.Sin(delta * 2/*waveCount*/ * Mathf.PI) * spring.Value * affectCurve.Evaluate(delta);

                    lineRenderer.SetPosition(i, Vector3.Lerp(throwTransform.position, currentGrapplePosition, delta) + offset);
                }
            }
        }
    }
}