using UnityEngine;

public class LookAtPlayer : MonoBehaviour
{
	public Transform followPoint;

	public Transform tmpPoint;

	public float lookAtSpeed = 4f;

	public bool isActive = true;

	private void Start()
	{
	}

	private void Update()
	{
		if (isActive)
		{
			tmpPoint.position = base.transform.position;
			tmpPoint.LookAt(followPoint);
			base.transform.rotation = Quaternion.Lerp(base.transform.rotation, tmpPoint.rotation, Time.unscaledDeltaTime * lookAtSpeed);
		}
	}
}
