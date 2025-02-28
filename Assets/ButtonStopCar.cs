using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ButtonStopCar : MonoBehaviour
{
    // Start is called before the first frame update
    public CrimeBus bus;
    public Text textPercent;
    public Image imgProcess;
    float percent = 0;
    bool isDown = false;
    void Start()
    {
        
    }

    public void OnClick() {
        percent = Mathf.Min(percent + 25, 100);
        imgProcess.fillAmount = percent/100f;
    }

    public void OnDown() {
        isDown = true;
    }

    public void OnUp()
    {
        isDown = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (isDown) {
            percent += Time.deltaTime * 25f;
            percent = Mathf.Min(percent, 100);
        }

        imgProcess.fillAmount = percent / 100f;
        textPercent.text = ((int)percent).ToString() + "%";
        if (percent >= 100) {
            
            bus.Stop();
        }
    }
}
