using Luna.Unity.FacebookInstantGames;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpiderFly : MonoBehaviour
{
    public Rigidbody rid;
    public SpiderController controller;
    public Animator animator;
    public Transform punchPoint;
    public GameManagerSwing gameManager;
    public ParticleSystem handEff, effectExplosion;
    public Animator[] enemies;
    public GameObject btFullGame, guideHook;
    public AudioClip[] clips;
    public AudioSource swingSound;
    bool isPunch = false;
    public AudioSource lightingSound, exploseSound;
    
    int swingCount = 0;
    // Start is called before the first frame update
    public void OnAddForce() {
        swingCount++;
        rid.velocity = Vector3.zero;
        controller.Release();
        var vector = Quaternion.AngleAxis(Random.Range(-5f, 5f), Vector3.up) * transform.forward;
        if (swingCount >= 3) {
            var tmp = punchPoint.position;
            tmp.y = transform.position.y;
            transform.LookAt(tmp, Vector3.up);
            vector = transform.forward;
        }

        transform.forward = vector;
        var forceDirection = vector + Vector3.up;
        rid.AddForce(forceDirection * Random.Range(40000, 50000), ForceMode.Force);
        int index = Random.Range(0, clips.Length);
        swingSound.PlayOneShot(clips[index]);
    }

    

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.tag == "jump") {
            if (rid.velocity.y < 0 && animator.GetCurrentAnimatorStateInfo(0).IsName("fall"))
            { 
                Time.timeScale = 0;
                guideHook.SetActive(true);
            }
        }

        if (other.gameObject.tag == "punch" && !isPunch)
        {
            rid.velocity = Vector3.zero;
            rid.isKinematic = true;
            Time.timeScale = 0;
            gameManager.btSwing.SetActive(false);
            gameManager.btSkill.SetActive(true);
        }
    }

    public void OnSkillClick() {
        isPunch = true;
        gameManager.btSkill.SetActive(false);
        animator.Play("skill2");
        handEff.Play();
        effectExplosion.Play();
        Time.timeScale = 1;
        StartCoroutine(StartPunch());
    }

    IEnumerator StartPunch() {
        yield return new WaitForSeconds(0.5f);

        gameManager.ChangePlayerCam1();
        yield return new WaitForSeconds(1.2f);
        for (int i = 0; i < enemies.Length; i++)
        {
            enemies[i].Play("down");
        }
        exploseSound.Play();
        yield return new WaitForSeconds(2f);
        Luna.Unity.LifeCycle.GameEnded();
        yield return new WaitForSeconds(0.5f);
        btFullGame.SetActive(true);
        Luna.Unity.Playable.InstallFullGame();
        
    }

    public void OnStartLighting() {
        handEff.Play();
        lightingSound.Play();
    }

    public void OnEndLighting()
    {
        handEff.gameObject.SetActive(false);
       
    }

    float velocity;
    bool isMove = false;
    public void OnStartMove() {
        float distance = Vector3.Distance(transform.position, punchPoint.position);
        velocity = distance * 2;
        isMove = true;
        //LeanTween.move(gameObject, punchPoint.position, 0.5f).setOnComplete(() => { 
        //    for(int i = 0; i < enemies.Length; i++)
        //    {
        //        enemies[i].Play("down");
        //    }
        //}) ;
    }

    private void Update()
    {
        if(isMove)
        {
            transform.position = Vector3.Lerp(transform.position, punchPoint.position, Time.deltaTime * velocity);
        }
    }

}
