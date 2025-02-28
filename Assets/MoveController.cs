using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveController : MonoBehaviour
{
    public LookAtPlayer cameraLook;
    public Transform cameraParent;
    public Animator playerAnim;
    public CrimeBus bus;
    public GameObject btKick;
    bool moveCam = false;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    public void OnStartFollow() {
        moveCam = true;
    }

    public void OnStartLanding() {
        playerAnim.SetTrigger("sit_car");
        //playerAnim.CrossFade("sit_car", 0.1f);
    }

    public void StartKick()
    {
        
    }

    public void OnEndMove() {
        btKick.SetActive(true);
        bus.SetPlayer(playerAnim.transform, cameraParent);
    }

    // Update is called once per frame
    void Update()
    {
        if (moveCam) {
            var targetPos = playerAnim.transform.localPosition + Vector3.up * 3;
            cameraParent.localPosition = Vector3.Lerp(cameraParent.localPosition, targetPos, Time.deltaTime );
            if (Vector3.Distance(cameraParent.localPosition, targetPos) < 1f) {
                moveCam = false;
            }
        }
    }
}
