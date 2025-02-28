using Luna.Unity;
using UnityEngine;

public class GameManagerSwing : MonoBehaviour
{
	public SpiderController player;

	public Animator playerAnim;

	public Transform targetL;

	public Transform targetR;

	public Rigidbody playerRid;

	public GameObject btStart;

	public GameObject btSwing;

	public GameObject btSkill;

	public Transform playerPelvis;

	public Transform playerCam;

	public Transform playerCam1;

	public CameraFollow cameraFollow;

	public AudioSource hookSound;

	public GameObject wind;

	public GameObject trailL;

	public GameObject trailR;

	private bool isHold = false;

	private float holdTime;

	private float[] fallIndex = new float[2] { 0f, 0.6f };

	private void Start()
	{
	}

	public void OnHoldDown()
	{
		playerAnim.SetBool("hold_rope", true);
		player.OnThrowRope(targetL, targetR);
		isHold = true;
		holdTime = 0f;
	}

	public void OnHoldUp()
	{
		playerAnim.SetBool("hold_rope", false);
		isHold = false;
		player.Release();
		if (holdTime > 1f)
		{
			Vector3 forceDirection = player.transform.forward * 2f + Vector3.up;
			playerAnim.Play("swing1");
			playerRid.velocity = Vector3.zero;
			playerRid.AddForce(forceDirection * 50000f, ForceMode.Force);
			btSwing.SetActive(true);
			btStart.SetActive(false);
			cameraFollow.positionPoint = playerCam;
			cameraFollow.lookAtPoint = playerPelvis;
			hookSound.Play();
			if (wind != null)
			{
				wind.SetActive(true);
				trailL.SetActive(true);
				trailR.SetActive(true);
			}
		}
	}

	public void OnSwingClick()
	{
		int index = Random.Range(0, 4);
		playerAnim.Play("_swin" + index);
		Vector3 v = playerRid.velocity;
		v.y = 0f;
		playerRid.velocity = v;
		if (wind != null)
		{
			trailL.SetActive(false);
			trailR.SetActive(false);
		}
		playerAnim.SetFloat("fall", 0.6f);
	}

	public void ChangePlayerCam1()
	{
		cameraFollow.lookAtVelocity = 10f;
		cameraFollow.positionVelocity = 5f;
		cameraFollow.positionPoint = playerCam1;
	}

	public void FullGameClick()
	{
		Playable.InstallFullGame();
	}

	private void Update()
	{
		if (isHold)
		{
			holdTime += Time.deltaTime;
		}
	}
}
