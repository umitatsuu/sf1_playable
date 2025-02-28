using System.Collections;
using System.Collections.Generic;
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
    public AudioClip jumpSound, kump1Sound, kickSound;
    public AudioSource audioSource;
    // Start is called before the first frame update
    void Start()
    {

        Luna.Unity.LifeCycle.OnPause += PauseGameplay;
        Luna.Unity.LifeCycle.OnResume += ResumeGameplay;
    }

    // Update is called once per frame
    //void Update()
    //{
    //    if(Input.GetKeyDown(KeyCode.Space))
    //    {
    //    }

    //    if (Input.GetKeyDown(KeyCode.Alpha1))
    //    {
    //        //player.CrossFade("Skill", 0.2f);
    //    }
    //}



    public void Jump() {
        btJump.SetActive(false);
        StartCoroutine(StartGame());
        audioSource.clip = jumpSound;
        audioSource.Play();
    }

    public void Kick() {
        bus.OnPlayerKick();
        audioSource.clip = kump1Sound;
        audioSource.Play();
    }

    IEnumerator StartGame() {
        cameraLook.enabled = true;
        tutorial.Play("TutorialFall");
        player.Play("jump");
        wind.gameObject.SetActive(true);
        bus.gameObject.SetActive(true);
        yield return new WaitForSeconds(1f);
    }

    public void OnPlayNowClick() {
        Luna.Unity.Playable.InstallFullGame();
    }



    public void OnButtonClick() {
       
    }

    private void PauseGameplay()
    {

        // Pause the game
    }

    private void ResumeGameplay()
    {

        // Resume the game
    }
}
