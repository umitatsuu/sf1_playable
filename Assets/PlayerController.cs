using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public Animation anim;
    // Start is called before the first frame update
    void Start()
    {
        anim.Play("Run");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
