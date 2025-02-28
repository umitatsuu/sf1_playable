using System.Collections;
using Luna.Unity;
using UnityEngine;

public class SpiderFly : MonoBehaviour
{
	public Rigidbody rid;

	public SpiderController controller;

	public Animator animator;

	public Transform punchPoint;

	public GameManagerSwing gameManager;

	public ParticleSystem handEff;

	public ParticleSystem effectExplosion;

	public Animator[] enemies;

	public GameObject btFullGame;

	public GameObject guideHook;

	public AudioClip[] clips;

	public GameObject trailL;

	public GameObject trailR;

	public AudioSource swingSound;

	private bool isPunch = false;

	public AudioSource lightingSound;

	public AudioSource exploseSound;

	public GameObject popupSpawn;

	private int swingCount = 0;

	private float velocity;

	private bool isMove = false;

	public void OnAddForce()
	{
		swingCount++;
		rid.velocity = Vector3.zero;
		controller.Release();
		Vector3 vector = Quaternion.AngleAxis(Random.Range(-5f, 5f), Vector3.up) * base.transform.forward * 1.5f;
		if (swingCount >= 3)
		{
			Vector3 tmp = punchPoint.position;
			tmp.y = base.transform.position.y;
			base.transform.LookAt(tmp, Vector3.up);
			vector = base.transform.forward;
		}
		base.transform.forward = vector;
		Vector3 forceDirection = vector + Vector3.up;
		rid.AddForce(forceDirection * Random.Range(40000, 50000), ForceMode.Force);
		int index = Random.Range(0, clips.Length);
		swingSound.PlayOneShot(clips[index]);
		trailL.SetActive(true);
		trailR.SetActive(true);
	}

	private void OnTriggerEnter(Collider other)
	{
		if (other.gameObject.tag == "jump" && rid.velocity.y < 0f && animator.GetCurrentAnimatorStateInfo(0).IsName("fall1"))
		{
			Time.timeScale = 0f;
			guideHook.SetActive(true);
		}
		if (other.gameObject.tag == "punch" && !isPunch)
		{
			rid.velocity = Vector3.zero;
			rid.isKinematic = true;
			Time.timeScale = 0f;
			if (popupSpawn != null)
			{
				popupSpawn.SetActive(true);
				gameManager.btSwing.SetActive(false);
				LifeCycle.GameEnded();
			}
			else
			{
				gameManager.btSwing.SetActive(false);
				gameManager.btSkill.SetActive(true);
			}
		}
	}

	public void OnSkillClick()
	{
		isPunch = true;
		gameManager.btSkill.SetActive(false);
		animator.Play("skill2");
		handEff.Play();
		effectExplosion.Play();
		Time.timeScale = 1f;
		StartCoroutine(StartPunch());
	}

	private IEnumerator StartPunch()
	{
		yield return new WaitForSeconds(0.5f);
		gameManager.ChangePlayerCam1();
		yield return new WaitForSeconds(1.2f);
		for (int i = 0; i < enemies.Length; i++)
		{
			enemies[i].Play("down");
		}
		exploseSound.Play();
		yield return new WaitForSeconds(2f);
		LifeCycle.GameEnded();
		yield return new WaitForSeconds(0.5f);
		btFullGame.SetActive(true);
		Playable.InstallFullGame();
	}

	public void OnStartLighting()
	{
		handEff.Play();
		lightingSound.Play();
	}

	public void OnEndLighting()
	{
		handEff.gameObject.SetActive(false);
	}

	public void OnStartMove()
	{
		float distance = Vector3.Distance(base.transform.position, punchPoint.position);
		velocity = distance * 2f;
		isMove = true;
	}

	private void Update()
	{
		if (isMove)
		{
			base.transform.position = Vector3.Lerp(base.transform.position, punchPoint.position, Time.deltaTime * velocity);
		}
	}
}
