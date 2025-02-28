using System.Collections;
using Luna.Unity;
using UnityEngine;

public class GameManager : MonoBehaviour
{
	public Animator tutorial;

	public Animator player;

	public LookAtPlayer cameraLook;

	public GameObject wind;

	public CrimeBus bus;

	public MoveController moveController;

	public GameObject btJump;

	public AudioClip jumpSound;

	public AudioClip kump1Sound;

	public AudioClip kickSound;

	public AudioSource audioSource;

	private void Start()
	{
		LifeCycle.OnPause += PauseGameplay;
		LifeCycle.OnResume += ResumeGameplay;
	}

	public void Jump()
	{
		btJump.SetActive(false);
		StartCoroutine(StartGame());
		audioSource.clip = jumpSound;
		audioSource.Play();
	}

	public void Kick()
	{
		bus.OnPlayerKick();
		audioSource.clip = kump1Sound;
		audioSource.Play();
	}

	private IEnumerator StartGame()
	{
		cameraLook.enabled = true;
		tutorial.Play("TutorialFall");
		player.Play("jump");
		wind.gameObject.SetActive(true);
		bus.gameObject.SetActive(true);
		yield return new WaitForSeconds(1f);
	}

	public void OnPlayNowClick()
	{
		Playable.InstallFullGame();
	}

	public void OnButtonClick()
	{
	}

	private void PauseGameplay()
	{
	}

	private void ResumeGameplay()
	{
	}
}
