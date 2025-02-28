using UnityEngine;
using UnityEngine.UI;

public class ButtonStopCar : MonoBehaviour
{
	public CrimeBus bus;

	public Text textPercent;

	public Image imgProcess;

	private float percent = 0f;

	private bool isDown = false;

	private void Start()
	{
	}

	public void OnClick()
	{
		percent = Mathf.Min(percent + 25f, 100f);
		imgProcess.fillAmount = percent / 100f;
	}

	public void OnDown()
	{
		isDown = true;
	}

	public void OnUp()
	{
		isDown = false;
	}

	private void Update()
	{
		if (isDown)
		{
			percent += Time.deltaTime * 25f;
			percent = Mathf.Min(percent, 100f);
		}
		imgProcess.fillAmount = percent / 100f;
		textPercent.text = (int)percent + "%";
		if (percent >= 100f)
		{
			bus.Stop();
		}
	}
}
