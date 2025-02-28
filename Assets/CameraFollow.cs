using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    public Transform positionPoint;
    public Transform lookAtPoint;
    public Transform tmpCam;
    public Transform mainCamera;
    public float positionVelocity;
    public float lookAtVelocity;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void LateUpdate ()
    {
        if(positionPoint != null)
        {
            transform.position = Vector3.Lerp(transform.position, positionPoint.position, Time.deltaTime * positionVelocity);
        }

        if (lookAtPoint != null) {
            tmpCam.LookAt(lookAtPoint);
            mainCamera.rotation = Quaternion.Lerp(mainCamera.rotation, tmpCam.rotation, Time.deltaTime * lookAtVelocity);
        }
    }
}
