using UnityEngine;

public class CameraFollow : MonoBehaviour
{
	public Transform positionPoint;

	public Transform lookAtPoint;

	public Transform tmpCam;

	public Transform mainCamera;

	public float positionVelocity;

	public float lookAtVelocity;

	private void Start()
	{
	}

	private void LateUpdate()
	{
		if (positionPoint != null)
		{
			base.transform.position = Vector3.Lerp(base.transform.position, positionPoint.position, Time.deltaTime * positionVelocity);
		}
		if (lookAtPoint != null)
		{
			tmpCam.LookAt(lookAtPoint);
			mainCamera.rotation = Quaternion.Lerp(mainCamera.rotation, tmpCam.rotation, Time.deltaTime * lookAtVelocity);
		}
	}
}
