using UnityEngine;

public class SpiderController : MonoBehaviour
{
	public mvSpringRope ropeL;

	public mvSpringRope ropeR;

	public Transform handL;

	public Transform handR;

	private Transform targetL;

	private Transform targetR;

	private GameObject ropePosition;

	public GameManagerSwing manager;

	private void Start()
	{
		ropeL.SetThrowTransform(handL);
		ropeR.SetThrowTransform(handR);
		ropePosition = new GameObject("ropePosition");
	}

	public void OnThrowRope(Transform targetL, Transform targetR)
	{
		ropeL.Throw(targetL);
		ropeR.Throw(targetR);
	}

	public void ThrowRopeL()
	{
		ropeL.Throw(targetL);
	}

	public void ThrowRopeR()
	{
		ropeR.Throw(targetR);
	}

	public void Release()
	{
		ropeL.Release();
		ropeR.Release();
	}

	public void ThrowRopeLeftAnim()
	{
		ropePosition.transform.position = base.transform.position + Vector3.up * 30f + base.transform.forward * 10f;
		ropeL.Throw(ropePosition.transform);
		if (manager != null)
		{
			manager.hookSound.Play();
		}
	}

	public void ThrowRopeRightAnim()
	{
		ropePosition.transform.position = base.transform.position + Vector3.up * 30f + base.transform.forward * 10f;
		ropeR.Throw(ropePosition.transform);
	}
}
