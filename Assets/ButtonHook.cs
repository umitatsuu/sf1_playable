using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ButtonHook : MonoBehaviour
{
    // Start is called before the first frame update
    public GameManagerSwing gameManager;
    public float waitTime = 3;
    public Image process;
    float timecount = 0;
    bool isReady = true;
    void Start()
    {
        isReady = true;
        timecount = waitTime;
    }

    public void OnClick() {
        if(isReady)
        {
            gameManager.OnSwingClick();
            isReady = false;
            timecount = waitTime;
            Time.timeScale = 1f;
        }
    }

    // Update is called once per frame
    void Update()
    {
        timecount = Mathf.Max(0, timecount - Time.unscaledDeltaTime);
        process.fillAmount = Mathf.Max(0, timecount/waitTime);
        if (timecount <= 0) {
            isReady = true;
        }
    }
}
