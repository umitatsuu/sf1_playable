using UnityEngine;

public class PlayerController : MonoBehaviour
{
	public Animation anim;

	private void Start()
	{
		anim.Play("Run");
	}

	private void Update()
	{
	}
}
