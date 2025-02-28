using System.Collections;
using Luna.Unity;
using UnityEngine;

public class CrimeBus : MonoBehaviour
{
	public Transform playerParent;

	public Transform camPointTarget;

	public Transform step2;

	public Transform step3;

	public Transform step4;

	public Transform camStep3;

	public Transform camStep4;

	public LookAtPlayer camLook;

	public GameObject btKick;

	public GameObject trail;

	public GameObject stopCarView;

	public GameObject playNow;

	private Transform _player;

	private Transform cameraParent;

	public Transform camForcus4;

	public SpiderController spiderController;

	public AudioSource kickSound;

	public AudioSource carEngine;

	private Animator playerAnim;

	private int step = 0;

	private bool isStop = false;

	public ParticleSystem smoke1;

	public ParticleSystem smoke2;

	private float tmp = 0f;

	private bool isEndGame = false;

	public GameObject breakDoor;

	public GameObject driver;

	public void SetPlayer(Transform player, Transform camPoint)
	{
		_player = player;
		_player.parent = playerParent;
		cameraParent = camPoint;
		cameraParent.parent = playerParent;
		step = 1;
	}

	private void Start()
	{
		base.transform.position -= base.transform.forward * 70f;
	}

	public void OnPlayerKick()
	{
		btKick.SetActive(false);
		StartCoroutine(StartKick());
	}

	private IEnumerator StartKick()
	{
		playerAnim = _player.GetComponent<Animator>();
		playerAnim.SetTrigger("kick");
		yield return new WaitForSeconds(0.3f);
		cameraParent.parent = base.transform;
		step = 2;
		yield return new WaitForSeconds(0.4f);
		Time.timeScale = 0.5f;
		yield return new WaitForSeconds(0.15f);
		Time.timeScale = 1f;
		step = 3;
		yield return new WaitForSeconds(0.5f);
		CrashDoor();
		yield return new WaitForSeconds(0.2f);
		playerAnim.SetTrigger("start_rope");
		step = 4;
		yield return new WaitForSeconds(0.5f);
		camLook.followPoint = camForcus4;
		trail.SetActive(true);
		stopCarView.SetActive(true);
	}

	private void Update()
	{
		if (!isStop)
		{
			base.transform.position += base.transform.forward * Time.deltaTime * 10f;
			if (step == 1 && _player != null)
			{
				_player.localPosition = Vector3.Lerp(_player.localPosition, Vector3.zero, Time.deltaTime * 10f);
				cameraParent.localPosition = Vector3.Lerp(cameraParent.localPosition, camPointTarget.localPosition, Time.deltaTime * 2f);
			}
			else if (step == 2)
			{
				playerParent.localPosition = Vector3.Lerp(playerParent.localPosition, step2.localPosition, Time.deltaTime * 3f);
				playerParent.localRotation = Quaternion.Lerp(playerParent.localRotation, step2.localRotation, Time.deltaTime * 3f);
			}
			else if (step == 3)
			{
				playerParent.localPosition = Vector3.Lerp(playerParent.localPosition, step3.localPosition, Time.deltaTime * 3f);
				playerParent.localRotation = Quaternion.Lerp(playerParent.localRotation, step3.localRotation, Time.deltaTime * 3f);
				cameraParent.localPosition = Vector3.Lerp(cameraParent.localPosition, camStep3.localPosition, Time.deltaTime * 2f);
			}
			else if (step == 4)
			{
				playerParent.localPosition = Vector3.Lerp(playerParent.localPosition, step4.localPosition, Time.deltaTime * 2f);
				playerParent.localRotation = Quaternion.Lerp(playerParent.localRotation, step4.localRotation, Time.deltaTime * 2f);
				cameraParent.localPosition = Vector3.Lerp(cameraParent.localPosition, camStep4.localPosition, Time.deltaTime);
			}
		}
	}

	public void CrashDoor()
	{
		breakDoor.transform.parent = null;
		Rigidbody rid = breakDoor.GetComponent<Rigidbody>();
		rid.isKinematic = false;
		rid.AddForce(breakDoor.transform.right * -1f * 300f, ForceMode.Force);
		rid.AddTorque(breakDoor.transform.right * 10f + Vector3.up * Random.Range(-10f, 10f));
		driver.transform.parent = null;
		driver.GetComponent<Animator>().Play("down");
		Rigidbody rigids = driver.GetComponent<Rigidbody>();
		rigids.isKinematic = false;
		rigids.AddForce(breakDoor.transform.right * -1f * 300f, ForceMode.Force);
		rigids.AddTorque(breakDoor.transform.right * 10f + Vector3.up * Random.Range(-10f, 10f));
		kickSound.Play();
	}

	public void Stop()
	{
		isStop = true;
		smoke1.Stop();
		smoke2.Stop();
		playerAnim.SetTrigger("car_end");
		spiderController.Release();
		stopCarView.SetActive(false);
		playNow.SetActive(true);
		carEngine.Stop();
		LifeCycle.GameEnded();
		Playable.InstallFullGame();
	}
}
