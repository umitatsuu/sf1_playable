using Luna.Unity.FacebookInstantGames;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManagerSwing : MonoBehaviour
{
    public SpiderController player;
    public Animator playerAnim;
    public Transform targetL, targetR;
    public Rigidbody playerRid;
    public GameObject btStart, btSwing, btSkill;
    public Transform playerPelvis, playerCam, playerCam1;
    public CameraFollow cameraFollow;
    public AudioSource hookSound;
    public GameObject wind;
    public GameObject trailL, trailR;
    bool isHold = false;
    float holdTime;
    float[] fallIndex = { 0, 0.6f}; 
    // Start is called before the first frame update
    void Start()
    {
        
    }

    public void OnHoldDown() {
        playerAnim.SetBool("hold_rope", true);
        player.OnThrowRope(targetL, targetR);
        isHold = true;
        holdTime = 0f;
    }

    public void OnHoldUp() {
        playerAnim.SetBool("hold_rope", false);
        isHold = false;
        player.Release();
        if (holdTime > 1f)
        {
            var forceDirection = player.transform.forward * 2 + Vector3.up;
            playerAnim.Play("swing1");
            playerRid.velocity = Vector3.zero;
            playerRid.AddForce(forceDirection * 50000, ForceMode.Force);
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



    public void OnSwingClick() {
        int index = Random.Range(0, 4);
        playerAnim.Play("_swin" + index);
        var v = playerRid.velocity;
        v.y = 0;
        playerRid.velocity = v;
        if (wind != null)
        {
            trailL.SetActive(false);
            trailR.SetActive(false);
        }
        playerAnim.SetFloat("fall", 0.6f);
    }

    public void ChangePlayerCam1() {
        cameraFollow.lookAtVelocity = 10;
        cameraFollow.positionVelocity = 5;
        cameraFollow.positionPoint = playerCam1;
    }

    public void FullGameClick() {
        Luna.Unity.Playable.InstallFullGame();
    }
    

    // Update is called once per frame
    void Update()
    {
        if(isHold)
        {
            holdTime += Time.deltaTime;
        }
    }
}
