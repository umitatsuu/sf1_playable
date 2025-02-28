using UnityEngine;

public class MoveController : MonoBehaviour
{
	public LookAtPlayer cameraLook;

	public Transform cameraParent;

	public Animator playerAnim;

	public CrimeBus bus;

	public GameObject btKick;

	private bool moveCam = false;

	private void Start()
	{
	}

	public void OnStartFollow()
	{
		moveCam = true;
	}

	public void OnStartLanding()
	{
		playerAnim.SetTrigger("sit_car");
	}

	public void StartKick()
	{
	}

	public void OnEndMove()
	{
		btKick.SetActive(true);
		bus.SetPlayer(playerAnim.transform, cameraParent);
	}

	private void Update()
	{
		if (moveCam)
		{
			Vector3 targetPos = playerAnim.transform.localPosition + Vector3.up * 3f;
			cameraParent.localPosition = Vector3.Lerp(cameraParent.localPosition, targetPos, Time.deltaTime);
			if (Vector3.Distance(cameraParent.localPosition, targetPos) < 1f)
			{
				moveCam = false;
			}
		}
	}
}
