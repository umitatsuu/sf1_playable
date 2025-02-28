using UnityEngine;
using UnityEngine.UI;

public class ButtonHook : MonoBehaviour
{
	public GameManagerSwing gameManager;

	public float waitTime = 3f;

	public Image process;

	private float timecount = 0f;

	private bool isReady = true;

	private void Start()
	{
		isReady = true;
		timecount = waitTime;
	}

	public void OnClick()
	{
		if (isReady)
		{
			gameManager.OnSwingClick();
			isReady = false;
			timecount = waitTime;
			Time.timeScale = 1f;
		}
	}

	private void Update()
	{
		timecount = Mathf.Max(0f, timecount - Time.unscaledDeltaTime);
		process.fillAmount = Mathf.Max(0f, timecount / waitTime);
		if (timecount <= 0f)
		{
			isReady = true;
		}
	}
}
