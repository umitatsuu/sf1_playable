using UnityEngine;

public class mvSpring
{
	private float strength;

	private float damper;

	private float target;

	private float velocity;

	private float value;

	public float Value => value;

	public void Update(float deltaTime)
	{
		float direction = ((target - value >= 0f) ? 1f : (-1f));
		float force = Mathf.Abs(target - value) * strength;
		velocity += (force * direction - velocity * damper) * deltaTime;
		value += velocity * deltaTime;
	}

	public void Reset()
	{
		velocity = 0f;
		value = 0f;
	}

	public void SetValue(float value)
	{
		this.value = value;
	}

	public void SetTarget(float target)
	{
		this.target = target;
	}

	public void SetDamper(float damper)
	{
		this.damper = damper;
	}

	public void SetStrength(float strength)
	{
		this.strength = strength;
	}

	public void SetVelocity(float velocity)
	{
		this.velocity = velocity;
	}
}
