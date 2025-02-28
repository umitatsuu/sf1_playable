using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LookAtPlayer : MonoBehaviour
{
    // Start is called before the first frame update
    public Transform followPoint;
    //public Transform lookAtPoint;
    public Transform tmpPoint;
    public float lookAtSpeed = 4f;
    public bool isActive = true;
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (isActive)
        {
            //if (followPoint != null)
            //{
            //    if (transform.parent != followPoint.parent)
            //    {
            //        transform.parent = followPoint.parent;
            //    }
            //    transform.localPosition = Vector3.Lerp(transform.localPosition, followPoint.localPosition, Time.deltaTime * 5);
            //    //transform.LookAt(GameManager.Instance.playerPelvis);
            //}
            //else
            {
                tmpPoint.position = transform.position;
                tmpPoint.LookAt(followPoint);
                transform.rotation = Quaternion.Lerp(transform.rotation, tmpPoint.rotation, Time.unscaledDeltaTime * lookAtSpeed);
            }
        }
    }
}
