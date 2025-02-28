using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpiderController : MonoBehaviour
{
    public mvSpringRope ropeL, ropeR;
    public Transform handL, handR;
    Transform targetL, targetR;
    GameObject ropePosition;
    public GameManagerSwing manager;

    // Start is called before the first frame update
    void Start()
    {
        ropeL.SetThrowTransform(handL);
        ropeR.SetThrowTransform(handR);
        ropePosition = new GameObject("ropePosition");
    }

    public void OnThrowRope(Transform targetL, Transform targetR) {
        ropeL.Throw(targetL);
        ropeR.Throw(targetR);
    }

    public void ThrowRopeL() {
        ropeL.Throw(targetL);
    }

    public void ThrowRopeR() {
        ropeR.Throw(targetR);
    }

    public void Release() {
        ropeL.Release();
        ropeR.Release();
    }

    public void ThrowRopeLeftAnim() {
        ropePosition.transform.position = transform.position + Vector3.up * 30 + transform.forward * 10;
        ropeL.Throw(ropePosition.transform);
        if(manager != null) { manager.hookSound.Play(); }
    }

    public void ThrowRopeRightAnim() {
        ropePosition.transform.position = transform.position + Vector3.up * 30 + transform.forward * 10;
        ropeR.Throw(ropePosition.transform);
    }
   
}
