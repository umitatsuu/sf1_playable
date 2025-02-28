using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CrimeBus : MonoBehaviour
{
    public Transform playerParent;
    public Transform camPointTarget;
    public Transform step2, step3, step4;
    public Transform camStep3, camStep4;
    public LookAtPlayer camLook;
    public GameObject btKick;
    public GameObject trail;
    public GameObject stopCarView;
    public GameObject playNow;
    Transform _player;
    Transform cameraParent;
    public Transform camForcus4;
    public SpiderController spiderController;
    public AudioSource kickSound, carEngine;
    Animator playerAnim;
    int step = 0;
    bool isStop = false;
    public ParticleSystem smoke1, smoke2;
    public void SetPlayer(Transform player, Transform camPoint) {
        _player = player;
        _player.parent = playerParent;
        cameraParent = camPoint;
        cameraParent.parent = playerParent;
        step = 1;
    }
    // Start is called before the first frame update
    void Start()
    {
        transform.position -= transform.forward * 70f;
    }

    public void OnPlayerKick() {
        btKick.SetActive(false);

        StartCoroutine(StartKick());
    }

    IEnumerator StartKick() {
        playerAnim = _player.GetComponent<Animator>();
        playerAnim.SetTrigger("kick");
        //playerAnim.CrossFade("Skill", 0.2f);
        yield return new WaitForSeconds(0.3f);
        cameraParent.parent = transform;
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
        //Time.timeScale = 0f;
    }

    float tmp = 0;
    bool isEndGame = false;
    // Update is called once per frame
    void Update()
    {
        if (isStop) {
            //tmp += Time.deltaTime;
            //if (tmp > 3 && isEndGame == false)
            //{
            //    isEndGame = true;
            //    Luna.Unity.LifeCycle.GameEnded();
            //}
            return;
        }
        transform.position += transform.forward * Time.deltaTime * 10;
        if (step == 1 && _player != null)
        {
            _player.localPosition = Vector3.Lerp(_player.localPosition, Vector3.zero, Time.deltaTime * 10);
            cameraParent.localPosition = Vector3.Lerp(cameraParent.localPosition, camPointTarget.localPosition, Time.deltaTime * 2);
        }
        else if (step == 2) {
            playerParent.localPosition = Vector3.Lerp(playerParent.localPosition, step2.localPosition, Time.deltaTime* 3f);
            playerParent.localRotation = Quaternion.Lerp(playerParent.localRotation, step2.localRotation, Time.deltaTime * 3f);
        }
        else if (step == 3)
        {
            playerParent.localPosition = Vector3.Lerp(playerParent.localPosition, step3.localPosition, Time.deltaTime * 3f);
            playerParent.localRotation = Quaternion.Lerp(playerParent.localRotation, step3.localRotation, Time.deltaTime * 3f);
            cameraParent.localPosition = Vector3.Lerp(cameraParent.localPosition, camStep3.localPosition, Time.deltaTime * 2);

        }
        else if (step == 4)
        {
            playerParent.localPosition = Vector3.Lerp(playerParent.localPosition, step4.localPosition, Time.deltaTime * 2f);
            playerParent.localRotation = Quaternion.Lerp(playerParent.localRotation, step4.localRotation, Time.deltaTime * 2f);
            cameraParent.localPosition = Vector3.Lerp(cameraParent.localPosition, camStep4.localPosition, Time.deltaTime);

        }
    }

    public GameObject breakDoor;
    public GameObject driver;

    public void CrashDoor()
    {
        breakDoor.transform.parent = null;
        var rid = breakDoor.GetComponent<Rigidbody>();
        rid.isKinematic = false;
        rid.AddForce(breakDoor.transform.right * -1 * 300, ForceMode.Force);
        rid.AddTorque(breakDoor.transform.right * 10 + Vector3.up * Random.Range(-10f, 10f));
        driver.transform.parent = null;
        driver.GetComponent<Animator>().Play("down");
        var rigids = driver.GetComponent<Rigidbody>();
        rigids.isKinematic = false;
        rigids.AddForce(breakDoor.transform.right * -1 * 300, ForceMode.Force);
        rigids.AddTorque(breakDoor.transform.right * 10 + Vector3.up * Random.Range(-10f, 10f));
        kickSound.Play();
    }

    public void Stop() {
        isStop = true;
        smoke1.Stop();
        smoke2.Stop();
        playerAnim.SetTrigger("car_end");
        spiderController.Release();
        stopCarView.SetActive(false);
        playNow.SetActive(true);
        carEngine.Stop();
        Luna.Unity.LifeCycle.GameEnded();
        Luna.Unity.Playable.InstallFullGame();

    }
}
