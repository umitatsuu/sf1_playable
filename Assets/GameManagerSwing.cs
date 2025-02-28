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
    // Start is called before the first frame update
    void Start()
    {
        
    }

    public void OnHoldDown() {
        playerAnim.SetTrigger("hold_rope");
        player.OnThrowRope(targetL, targetR);
    }

    public void OnHoldUp() {
        player.Release();
        var forceDirection = player.transform.forward + Vector3.up;
        playerAnim.Play("swing1");
        playerRid.velocity = Vector3.zero;
        playerRid.AddForce(forceDirection * 40000, ForceMode.Force);
        btSwing.SetActive(true);
        btStart.SetActive(false);
        cameraFollow.positionPoint = playerCam;
        cameraFollow.lookAtPoint = playerPelvis;
        hookSound.Play();
    }

    public void OnSwingClick() {
        int index = Random.Range(0, 4);
        playerAnim.Play("_swin" + index);
        var v = playerRid.velocity;
        v.y = 0;
        playerRid.velocity = v;
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
        
    }
}
