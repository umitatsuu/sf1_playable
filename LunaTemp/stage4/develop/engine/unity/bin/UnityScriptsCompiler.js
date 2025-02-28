if ( TRACE ) { TRACE( JSON.parse( '["ButtonHook#init","ButtonHook#Start","ButtonHook#OnClick","ButtonHook#Update","ButtonStopCar#init","ButtonStopCar#Start","ButtonStopCar#OnClick","ButtonStopCar#OnDown","ButtonStopCar#OnUp","ButtonStopCar#Update","CameraFollow#Start","CameraFollow#LateUpdate","CrimeBus#init","CrimeBus#SetPlayer","CrimeBus#Start","CrimeBus#OnPlayerKick","CrimeBus#StartKick","CrimeBus#Update","CrimeBus#CrashDoor","CrimeBus#Stop","GameManager#Start","GameManager#Jump","GameManager#Kick","GameManager#StartGame","GameManager#OnPlayNowClick","GameManager#OnButtonClick","GameManager#PauseGameplay","GameManager#ResumeGameplay","GameManagerSwing#Start","GameManagerSwing#OnHoldDown","GameManagerSwing#OnHoldUp","GameManagerSwing#OnSwingClick","GameManagerSwing#ChangePlayerCam1","GameManagerSwing#FullGameClick","GameManagerSwing#Update","LookAtPlayer#init","LookAtPlayer#Start","LookAtPlayer#Update","MoveController#init","MoveController#Start","MoveController#OnStartFollow","MoveController#OnStartLanding","MoveController#StartKick","MoveController#OnEndMove","MoveController#Update","mvSpring#Value#get","mvSpring#Update","mvSpring#Reset","mvSpring#SetValue","mvSpring#SetTarget","mvSpring#SetDamper","mvSpring#SetStrength","mvSpring#SetVelocity","mvSpringRope#init","mvSpringRope#Start","mvSpringRope#SetThrowTransform","mvSpringRope#SetThrowTransform$1","mvSpringRope#Throw","mvSpringRope#Release","mvSpringRope#LateUpdate","mvSpringRope#UpdateSpringRope","PlayerController#Start","PlayerController#Update","SmoothShakeFree.ShakeBase#init","SmoothShakeFree.ShakeBase#Awake","SmoothShakeFree.ShakeBase#Start","SmoothShakeFree.ShakeBase#StartShake","SmoothShakeFree.ShakeBase#StartShake$1","SmoothShakeFree.ShakeBase#StopShake","SmoothShakeFree.ShakeBase#ForceStop","SmoothShakeFree.ShakeBase#ClearAfterFinished","SmoothShakeFree.ShakeBase#ShakeRoutine","SmoothShakeFree.ShakeBase#FadeRoutine","SmoothShakeFree.ShakeBase#HoldRoutine","SmoothShakeFree.ShakeBase#Execute","SmoothShakeFree.ShakeBase#ApplySum","SmoothShakeFree.ShakeBase#Update","SmoothShakeFree.Shaker#init","SmoothShakeFree.Shaker#Evaluate","SmoothShakeFree.Shaker#EvaluateBase","SmoothShakeFree.Shaker#EvaluateSinewave","SmoothShakeFree.Shaker#EvaluateWhiteNoise","SmoothShakeFree.SmoothShakeFreePreset#init","SmoothShakeFree.TimeSettings#getDefaultValue","SmoothShakeFree.TimeSettings#ctor","SmoothShakeFree.TimeSettings#GetShakeDuration","SmoothShakeFree.TimeSettings#getHashCode","SmoothShakeFree.TimeSettings#equals","SmoothShakeFree.TimeSettings#$clone","SmoothShakeFree.Utility#Remap","SpiderController#Start","SpiderController#OnThrowRope","SpiderController#ThrowRopeL","SpiderController#ThrowRopeR","SpiderController#Release","SpiderController#ThrowRopeLeftAnim","SpiderController#ThrowRopeRightAnim","SpiderFly#init","SpiderFly#OnAddForce","SpiderFly#OnTriggerEnter","SpiderFly#OnSkillClick","SpiderFly#StartPunch","SpiderFly#OnStartLighting","SpiderFly#OnEndLighting","SpiderFly#OnStartMove","SpiderFly#Update","SmoothShakeFree.SmoothShake#init","SmoothShakeFree.SmoothShake#Apply","SmoothShakeFree.SmoothShake#GetShakers","SmoothShakeFree.SmoothShake#ResetDefaultValues","SmoothShakeFree.SmoothShake#SaveDefaultValues","SmoothShakeFree.SmoothShake#ApplyPresetSettings"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*ButtonHook start.*/
    Bridge.define("ButtonHook", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            gameManager: null,
            waitTime: 0,
            process: null,
            timecount: 0,
            isReady: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ButtonHook#init", this ); }

                this.waitTime = 3.0;
                this.timecount = 0.0;
                this.isReady = true;
            }
        },
        methods: {
            /*ButtonHook.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ButtonHook#Start", this ); }

                this.isReady = true;
                this.timecount = this.waitTime;
            },
            /*ButtonHook.Start end.*/

            /*ButtonHook.OnClick start.*/
            OnClick: function () {
if ( TRACE ) { TRACE( "ButtonHook#OnClick", this ); }

                if (this.isReady) {
                    this.gameManager.OnSwingClick();
                    this.isReady = false;
                    this.timecount = this.waitTime;
                    UnityEngine.Time.timeScale = 1.0;
                }
            },
            /*ButtonHook.OnClick end.*/

            /*ButtonHook.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ButtonHook#Update", this ); }

                this.timecount = UnityEngine.Mathf.Max(0.0, this.timecount - UnityEngine.Time.unscaledDeltaTime);
                this.process.fillAmount = UnityEngine.Mathf.Max(0.0, this.timecount / this.waitTime);
                if (this.timecount <= 0.0) {
                    this.isReady = true;
                }
            },
            /*ButtonHook.Update end.*/


        }
    });
    /*ButtonHook end.*/

    /*ButtonStopCar start.*/
    Bridge.define("ButtonStopCar", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            bus: null,
            textPercent: null,
            imgProcess: null,
            percent: 0,
            isDown: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ButtonStopCar#init", this ); }

                this.percent = 0.0;
                this.isDown = false;
            }
        },
        methods: {
            /*ButtonStopCar.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "ButtonStopCar#Start", this ); }
 },
            /*ButtonStopCar.Start end.*/

            /*ButtonStopCar.OnClick start.*/
            OnClick: function () {
if ( TRACE ) { TRACE( "ButtonStopCar#OnClick", this ); }

                this.percent = UnityEngine.Mathf.Min(this.percent + 25.0, 100.0);
                this.imgProcess.fillAmount = this.percent / 100.0;
            },
            /*ButtonStopCar.OnClick end.*/

            /*ButtonStopCar.OnDown start.*/
            OnDown: function () {
if ( TRACE ) { TRACE( "ButtonStopCar#OnDown", this ); }

                this.isDown = true;
            },
            /*ButtonStopCar.OnDown end.*/

            /*ButtonStopCar.OnUp start.*/
            OnUp: function () {
if ( TRACE ) { TRACE( "ButtonStopCar#OnUp", this ); }

                this.isDown = false;
            },
            /*ButtonStopCar.OnUp end.*/

            /*ButtonStopCar.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ButtonStopCar#Update", this ); }

                if (this.isDown) {
                    this.percent += UnityEngine.Time.deltaTime * 25.0;
                    this.percent = UnityEngine.Mathf.Min(this.percent, 100.0);
                }
                this.imgProcess.fillAmount = this.percent / 100.0;
                this.textPercent.text = Bridge.Int.clip32(this.percent) + "%";
                if (this.percent >= 100.0) {
                    this.bus.Stop();
                }
            },
            /*ButtonStopCar.Update end.*/


        }
    });
    /*ButtonStopCar end.*/

    /*CameraFollow start.*/
    Bridge.define("CameraFollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            positionPoint: null,
            lookAtPoint: null,
            tmpCam: null,
            mainCamera: null,
            positionVelocity: 0,
            lookAtVelocity: 0
        },
        methods: {
            /*CameraFollow.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CameraFollow#Start", this ); }
 },
            /*CameraFollow.Start end.*/

            /*CameraFollow.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "CameraFollow#LateUpdate", this ); }

                if (UnityEngine.Component.op_Inequality(this.positionPoint, null)) {
                    this.transform.position = new pc.Vec3().lerp( this.transform.position, this.positionPoint.position, UnityEngine.Time.deltaTime * this.positionVelocity );
                }
                if (UnityEngine.Component.op_Inequality(this.lookAtPoint, null)) {
                    this.tmpCam.LookAt(this.lookAtPoint);
                    this.mainCamera.rotation = new pc.Quat().slerp( this.mainCamera.rotation, this.tmpCam.rotation, UnityEngine.Time.deltaTime * this.lookAtVelocity );
                }
            },
            /*CameraFollow.LateUpdate end.*/


        }
    });
    /*CameraFollow end.*/

    /*CrimeBus start.*/
    Bridge.define("CrimeBus", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            playerParent: null,
            camPointTarget: null,
            step2: null,
            step3: null,
            step4: null,
            camStep3: null,
            camStep4: null,
            camLook: null,
            btKick: null,
            trail: null,
            stopCarView: null,
            playNow: null,
            _player: null,
            cameraParent: null,
            camForcus4: null,
            spiderController: null,
            kickSound: null,
            carEngine: null,
            playerAnim: null,
            step: 0,
            isStop: false,
            smoke1: null,
            smoke2: null,
            tmp: 0,
            isEndGame: false,
            breakDoor: null,
            driver: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CrimeBus#init", this ); }

                this.step = 0;
                this.isStop = false;
                this.tmp = 0.0;
                this.isEndGame = false;
            }
        },
        methods: {
            /*CrimeBus.SetPlayer start.*/
            SetPlayer: function (player, camPoint) {
if ( TRACE ) { TRACE( "CrimeBus#SetPlayer", this ); }

                this._player = player;
                this._player.parent = this.playerParent;
                this.cameraParent = camPoint;
                this.cameraParent.parent = this.playerParent;
                this.step = 1;
            },
            /*CrimeBus.SetPlayer end.*/

            /*CrimeBus.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CrimeBus#Start", this ); }

                this.transform.position = this.transform.position.$clone().sub( this.transform.forward.$clone().clone().scale( 70.0 ) );
            },
            /*CrimeBus.Start end.*/

            /*CrimeBus.OnPlayerKick start.*/
            OnPlayerKick: function () {
if ( TRACE ) { TRACE( "CrimeBus#OnPlayerKick", this ); }

                this.btKick.SetActive(false);
                this.StartCoroutine$1(this.StartKick());
            },
            /*CrimeBus.OnPlayerKick end.*/

            /*CrimeBus.StartKick start.*/
            StartKick: function () {
if ( TRACE ) { TRACE( "CrimeBus#StartKick", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.playerAnim = this._player.GetComponent(UnityEngine.Animator);
                                        this.playerAnim.SetTrigger$1("kick");
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.3);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.cameraParent.parent = this.transform;
                                        this.step = 2;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.4);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    UnityEngine.Time.timeScale = 0.5;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.15);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    UnityEngine.Time.timeScale = 1.0;
                                        this.step = 3;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this.CrashDoor();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this.playerAnim.SetTrigger$1("start_rope");
                                        this.step = 4;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 6;
                                        return true;
                                }
                                case 6: {
                                    this.camLook.followPoint = this.camForcus4;
                                        this.trail.SetActive(true);
                                        this.stopCarView.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CrimeBus.StartKick end.*/

            /*CrimeBus.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CrimeBus#Update", this ); }

                if (!this.isStop) {
                    this.transform.position = this.transform.position.$clone().add( this.transform.forward.$clone().clone().scale( UnityEngine.Time.deltaTime ).clone().scale( 10.0 ) );
                    if (this.step === 1 && UnityEngine.Component.op_Inequality(this._player, null)) {
                        this._player.localPosition = new pc.Vec3().lerp( this._player.localPosition, pc.Vec3.ZERO.clone(), UnityEngine.Time.deltaTime * 10.0 );
                        this.cameraParent.localPosition = new pc.Vec3().lerp( this.cameraParent.localPosition, this.camPointTarget.localPosition, UnityEngine.Time.deltaTime * 2.0 );
                    } else if (this.step === 2) {
                        this.playerParent.localPosition = new pc.Vec3().lerp( this.playerParent.localPosition, this.step2.localPosition, UnityEngine.Time.deltaTime * 3.0 );
                        this.playerParent.localRotation = new pc.Quat().slerp( this.playerParent.localRotation, this.step2.localRotation, UnityEngine.Time.deltaTime * 3.0 );
                    } else if (this.step === 3) {
                        this.playerParent.localPosition = new pc.Vec3().lerp( this.playerParent.localPosition, this.step3.localPosition, UnityEngine.Time.deltaTime * 3.0 );
                        this.playerParent.localRotation = new pc.Quat().slerp( this.playerParent.localRotation, this.step3.localRotation, UnityEngine.Time.deltaTime * 3.0 );
                        this.cameraParent.localPosition = new pc.Vec3().lerp( this.cameraParent.localPosition, this.camStep3.localPosition, UnityEngine.Time.deltaTime * 2.0 );
                    } else if (this.step === 4) {
                        this.playerParent.localPosition = new pc.Vec3().lerp( this.playerParent.localPosition, this.step4.localPosition, UnityEngine.Time.deltaTime * 2.0 );
                        this.playerParent.localRotation = new pc.Quat().slerp( this.playerParent.localRotation, this.step4.localRotation, UnityEngine.Time.deltaTime * 2.0 );
                        this.cameraParent.localPosition = new pc.Vec3().lerp( this.cameraParent.localPosition, this.camStep4.localPosition, UnityEngine.Time.deltaTime );
                    }
                }
            },
            /*CrimeBus.Update end.*/

            /*CrimeBus.CrashDoor start.*/
            CrashDoor: function () {
if ( TRACE ) { TRACE( "CrimeBus#CrashDoor", this ); }

                this.breakDoor.transform.parent = null;
                var rid = this.breakDoor.GetComponent(UnityEngine.Rigidbody);
                rid.isKinematic = false;
                rid.AddForce$1(this.breakDoor.transform.right.$clone().clone().scale( -1.0 ).clone().scale( 300.0 ), UnityEngine.ForceMode.Force);
                rid.AddTorque$1(this.breakDoor.transform.right.$clone().clone().scale( 10.0 ).add( pc.Vec3.UP.clone().clone().scale( UnityEngine.Random.Range$1(-10.0, 10.0) ) ));
                this.driver.transform.parent = null;
                this.driver.GetComponent(UnityEngine.Animator).Play$2("down");
                var rigids = this.driver.GetComponent(UnityEngine.Rigidbody);
                rigids.isKinematic = false;
                rigids.AddForce$1(this.breakDoor.transform.right.$clone().clone().scale( -1.0 ).clone().scale( 300.0 ), UnityEngine.ForceMode.Force);
                rigids.AddTorque$1(this.breakDoor.transform.right.$clone().clone().scale( 10.0 ).add( pc.Vec3.UP.clone().clone().scale( UnityEngine.Random.Range$1(-10.0, 10.0) ) ));
                this.kickSound.Play();
            },
            /*CrimeBus.CrashDoor end.*/

            /*CrimeBus.Stop start.*/
            Stop: function () {
if ( TRACE ) { TRACE( "CrimeBus#Stop", this ); }

                this.isStop = true;
                this.smoke1.Stop();
                this.smoke2.Stop();
                this.playerAnim.SetTrigger$1("car_end");
                this.spiderController.Release();
                this.stopCarView.SetActive(false);
                this.playNow.SetActive(true);
                this.carEngine.Stop();
                Luna.Unity.LifeCycle.GameEnded();
                Luna.Unity.Playable.InstallFullGame();
            },
            /*CrimeBus.Stop end.*/


        }
    });
    /*CrimeBus end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tutorial: null,
            player: null,
            cameraLook: null,
            wind: null,
            bus: null,
            moveController: null,
            btJump: null,
            jumpSound: null,
            kump1Sound: null,
            kickSound: null,
            audioSource: null
        },
        methods: {
            /*GameManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManager#Start", this ); }

                Luna.Unity.LifeCycle.addOnPause(Bridge.fn.cacheBind(this, this.PauseGameplay));
                Luna.Unity.LifeCycle.addOnResume(Bridge.fn.cacheBind(this, this.ResumeGameplay));
            },
            /*GameManager.Start end.*/

            /*GameManager.Jump start.*/
            Jump: function () {
if ( TRACE ) { TRACE( "GameManager#Jump", this ); }

                this.btJump.SetActive(false);
                this.StartCoroutine$1(this.StartGame());
                this.audioSource.clip = this.jumpSound;
                this.audioSource.Play();
            },
            /*GameManager.Jump end.*/

            /*GameManager.Kick start.*/
            Kick: function () {
if ( TRACE ) { TRACE( "GameManager#Kick", this ); }

                this.bus.OnPlayerKick();
                this.audioSource.clip = this.kump1Sound;
                this.audioSource.Play();
            },
            /*GameManager.Kick end.*/

            /*GameManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "GameManager#StartGame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    this.cameraLook.enabled = true;
                                        this.tutorial.Play$2("TutorialFall");
                                        this.player.Play$2("jump");
                                        this.wind.gameObject.SetActive(true);
                                        this.bus.gameObject.SetActive(true);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.StartGame end.*/

            /*GameManager.OnPlayNowClick start.*/
            OnPlayNowClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnPlayNowClick", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*GameManager.OnPlayNowClick end.*/

            /*GameManager.OnButtonClick start.*/
            OnButtonClick: function () {
if ( TRACE ) { TRACE( "GameManager#OnButtonClick", this ); }
 },
            /*GameManager.OnButtonClick end.*/

            /*GameManager.PauseGameplay start.*/
            PauseGameplay: function () {
if ( TRACE ) { TRACE( "GameManager#PauseGameplay", this ); }
 },
            /*GameManager.PauseGameplay end.*/

            /*GameManager.ResumeGameplay start.*/
            ResumeGameplay: function () {
if ( TRACE ) { TRACE( "GameManager#ResumeGameplay", this ); }
 },
            /*GameManager.ResumeGameplay end.*/


        }
    });
    /*GameManager end.*/

    /*GameManagerSwing start.*/
    Bridge.define("GameManagerSwing", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            player: null,
            playerAnim: null,
            targetL: null,
            targetR: null,
            playerRid: null,
            btStart: null,
            btSwing: null,
            btSkill: null,
            playerPelvis: null,
            playerCam: null,
            playerCam1: null,
            cameraFollow: null,
            hookSound: null
        },
        methods: {
            /*GameManagerSwing.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameManagerSwing#Start", this ); }
 },
            /*GameManagerSwing.Start end.*/

            /*GameManagerSwing.OnHoldDown start.*/
            OnHoldDown: function () {
if ( TRACE ) { TRACE( "GameManagerSwing#OnHoldDown", this ); }

                this.playerAnim.SetTrigger$1("hold_rope");
                this.player.OnThrowRope(this.targetL, this.targetR);
            },
            /*GameManagerSwing.OnHoldDown end.*/

            /*GameManagerSwing.OnHoldUp start.*/
            OnHoldUp: function () {
if ( TRACE ) { TRACE( "GameManagerSwing#OnHoldUp", this ); }

                this.player.Release();
                var forceDirection = this.player.transform.forward.$clone().add( pc.Vec3.UP.clone() );
                this.playerAnim.Play$2("swing1");
                this.playerRid.velocity = pc.Vec3.ZERO.clone();
                this.playerRid.AddForce$1(forceDirection.$clone().clone().scale( 40000.0 ), UnityEngine.ForceMode.Force);
                this.btSwing.SetActive(true);
                this.btStart.SetActive(false);
                this.cameraFollow.positionPoint = this.playerCam;
                this.cameraFollow.lookAtPoint = this.playerPelvis;
                this.hookSound.Play();
            },
            /*GameManagerSwing.OnHoldUp end.*/

            /*GameManagerSwing.OnSwingClick start.*/
            OnSwingClick: function () {
if ( TRACE ) { TRACE( "GameManagerSwing#OnSwingClick", this ); }

                var index = UnityEngine.Random.Range(0, 4);
                this.playerAnim.Play$2("_swin" + index);
                var v = this.playerRid.velocity.$clone();
                v.y = 0.0;
                this.playerRid.velocity = v.$clone();
            },
            /*GameManagerSwing.OnSwingClick end.*/

            /*GameManagerSwing.ChangePlayerCam1 start.*/
            ChangePlayerCam1: function () {
if ( TRACE ) { TRACE( "GameManagerSwing#ChangePlayerCam1", this ); }

                this.cameraFollow.lookAtVelocity = 10.0;
                this.cameraFollow.positionVelocity = 5.0;
                this.cameraFollow.positionPoint = this.playerCam1;
            },
            /*GameManagerSwing.ChangePlayerCam1 end.*/

            /*GameManagerSwing.FullGameClick start.*/
            FullGameClick: function () {
if ( TRACE ) { TRACE( "GameManagerSwing#FullGameClick", this ); }

                Luna.Unity.Playable.InstallFullGame();
            },
            /*GameManagerSwing.FullGameClick end.*/

            /*GameManagerSwing.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "GameManagerSwing#Update", this ); }
 },
            /*GameManagerSwing.Update end.*/


        }
    });
    /*GameManagerSwing end.*/

    /*LookAtPlayer start.*/
    Bridge.define("LookAtPlayer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            followPoint: null,
            tmpPoint: null,
            lookAtSpeed: 0,
            isActive: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LookAtPlayer#init", this ); }

                this.lookAtSpeed = 4.0;
                this.isActive = true;
            }
        },
        methods: {
            /*LookAtPlayer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LookAtPlayer#Start", this ); }
 },
            /*LookAtPlayer.Start end.*/

            /*LookAtPlayer.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LookAtPlayer#Update", this ); }

                if (this.isActive) {
                    this.tmpPoint.position = this.transform.position.$clone();
                    this.tmpPoint.LookAt(this.followPoint);
                    this.transform.rotation = new pc.Quat().slerp( this.transform.rotation, this.tmpPoint.rotation, UnityEngine.Time.unscaledDeltaTime * this.lookAtSpeed );
                }
            },
            /*LookAtPlayer.Update end.*/


        }
    });
    /*LookAtPlayer end.*/

    /*MoveController start.*/
    Bridge.define("MoveController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cameraLook: null,
            cameraParent: null,
            playerAnim: null,
            bus: null,
            btKick: null,
            moveCam: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MoveController#init", this ); }

                this.moveCam = false;
            }
        },
        methods: {
            /*MoveController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MoveController#Start", this ); }
 },
            /*MoveController.Start end.*/

            /*MoveController.OnStartFollow start.*/
            OnStartFollow: function () {
if ( TRACE ) { TRACE( "MoveController#OnStartFollow", this ); }

                this.moveCam = true;
            },
            /*MoveController.OnStartFollow end.*/

            /*MoveController.OnStartLanding start.*/
            OnStartLanding: function () {
if ( TRACE ) { TRACE( "MoveController#OnStartLanding", this ); }

                this.playerAnim.SetTrigger$1("sit_car");
            },
            /*MoveController.OnStartLanding end.*/

            /*MoveController.StartKick start.*/
            StartKick: function () {
if ( TRACE ) { TRACE( "MoveController#StartKick", this ); }
 },
            /*MoveController.StartKick end.*/

            /*MoveController.OnEndMove start.*/
            OnEndMove: function () {
if ( TRACE ) { TRACE( "MoveController#OnEndMove", this ); }

                this.btKick.SetActive(true);
                this.bus.SetPlayer(this.playerAnim.transform, this.cameraParent);
            },
            /*MoveController.OnEndMove end.*/

            /*MoveController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MoveController#Update", this ); }

                if (this.moveCam) {
                    var targetPos = this.playerAnim.transform.localPosition.$clone().add( pc.Vec3.UP.clone().clone().scale( 3.0 ) );
                    this.cameraParent.localPosition = new pc.Vec3().lerp( this.cameraParent.localPosition, targetPos, UnityEngine.Time.deltaTime );
                    if (pc.Vec3.distance( this.cameraParent.localPosition, targetPos ) < 1.0) {
                        this.moveCam = false;
                    }
                }
            },
            /*MoveController.Update end.*/


        }
    });
    /*MoveController end.*/

    /*mvSpring start.*/
    Bridge.define("mvSpring", {
        fields: {
            strength: 0,
            damper: 0,
            target: 0,
            velocity: 0,
            value: 0
        },
        props: {
            Value: {
                get: function () {
if ( TRACE ) { TRACE( "mvSpring#Value#get", this ); }

                    return this.value;
                }
            }
        },
        methods: {
            /*mvSpring.Update start.*/
            Update: function (deltaTime) {
if ( TRACE ) { TRACE( "mvSpring#Update", this ); }

                var direction = ((this.target - this.value >= 0.0) ? 1.0 : (-1.0));
                var force = Math.abs(this.target - this.value) * this.strength;
                this.velocity += (force * direction - this.velocity * this.damper) * deltaTime;
                this.value += this.velocity * deltaTime;
            },
            /*mvSpring.Update end.*/

            /*mvSpring.Reset start.*/
            Reset: function () {
if ( TRACE ) { TRACE( "mvSpring#Reset", this ); }

                this.velocity = 0.0;
                this.value = 0.0;
            },
            /*mvSpring.Reset end.*/

            /*mvSpring.SetValue start.*/
            SetValue: function (value) {
if ( TRACE ) { TRACE( "mvSpring#SetValue", this ); }

                this.value = value;
            },
            /*mvSpring.SetValue end.*/

            /*mvSpring.SetTarget start.*/
            SetTarget: function (target) {
if ( TRACE ) { TRACE( "mvSpring#SetTarget", this ); }

                this.target = target;
            },
            /*mvSpring.SetTarget end.*/

            /*mvSpring.SetDamper start.*/
            SetDamper: function (damper) {
if ( TRACE ) { TRACE( "mvSpring#SetDamper", this ); }

                this.damper = damper;
            },
            /*mvSpring.SetDamper end.*/

            /*mvSpring.SetStrength start.*/
            SetStrength: function (strength) {
if ( TRACE ) { TRACE( "mvSpring#SetStrength", this ); }

                this.strength = strength;
            },
            /*mvSpring.SetStrength end.*/

            /*mvSpring.SetVelocity start.*/
            SetVelocity: function (velocity) {
if ( TRACE ) { TRACE( "mvSpring#SetVelocity", this ); }

                this.velocity = velocity;
            },
            /*mvSpring.SetVelocity end.*/


        }
    });
    /*mvSpring end.*/

    /*mvSpringRope start.*/
    Bridge.define("mvSpringRope", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ropeWidth: 0,
            quality: 0,
            damper: 0,
            strength: 0,
            velocity: 0,
            waveCount: 0,
            waveHeight: 0,
            ropeSpeed: 0,
            affectCurve: null,
            spring: null,
            lineRenderer: null,
            throwTransform: null,
            throwTransform1: null,
            targetPosition: null,
            currentGrapplePosition: null,
            isOnAction: false,
            releaseImmediately: false,
            releaseQuality: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "mvSpringRope#init", this ); }

                this.currentGrapplePosition = new UnityEngine.Vector3();
                this.ropeWidth = 0.05;
                this.quality = 500;
                this.damper = 3.0;
                this.strength = 100.0;
                this.velocity = 60.0;
                this.waveCount = 3.0;
                this.waveHeight = 1.0;
                this.ropeSpeed = 5.0;
                this.affectCurve = new pc.AnimationCurve({keyframes: [ new pc.Keyframe(0.0, 0.0, 0, 0), new pc.Keyframe(0.6, 0.6, 0, 0), new pc.Keyframe(1.0, 0.0, 0, 0) ]});
                this.isOnAction = false;
                this.releaseImmediately = true;
            }
        },
        methods: {
            /*mvSpringRope.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "mvSpringRope#Start", this ); }

                this.lineRenderer.useWorldSpace = true;
                this.lineRenderer.startWidth = this.ropeWidth;
                this.lineRenderer.endWidth = this.ropeWidth;
                this.spring = new mvSpring();
                this.spring.SetTarget(0.0);
            },
            /*mvSpringRope.Start end.*/

            /*mvSpringRope.SetThrowTransform start.*/
            SetThrowTransform: function (target) {
if ( TRACE ) { TRACE( "mvSpringRope#SetThrowTransform", this ); }

                this.throwTransform = target;
                this.throwTransform1 = target;
            },
            /*mvSpringRope.SetThrowTransform end.*/

            /*mvSpringRope.SetThrowTransform$1 start.*/
            SetThrowTransform$1: function (target, subTarget) {
if ( TRACE ) { TRACE( "mvSpringRope#SetThrowTransform$1", this ); }

                this.throwTransform = target;
                this.throwTransform1 = subTarget;
            },
            /*mvSpringRope.SetThrowTransform$1 end.*/

            /*mvSpringRope.Throw start.*/
            Throw: function (target) {
if ( TRACE ) { TRACE( "mvSpringRope#Throw", this ); }

                if (UnityEngine.Component.op_Equality(this.throwTransform, null)) {
                    UnityEngine.Debug.LogError$2("[MIS-GrapplingRope]throwTransform must be set");
                    return;
                }
                this.isOnAction = true;
                this.targetPosition = target;
                if (!(pc.Vec3.equals( this.targetPosition.position, pc.Vec3.ZERO.clone() ))) {
                    var distance = (this.targetPosition.position.$clone().sub( this.throwTransform.position )).length();
                    this.releaseImmediately = true;
                }
            },
            /*mvSpringRope.Throw end.*/

            /*mvSpringRope.Release start.*/
            Release: function (immediate) {
if ( TRACE ) { TRACE( "mvSpringRope#Release", this ); }

                if (immediate === void 0) { immediate = true; }
                this.isOnAction = false;
                this.releaseImmediately = immediate;
            },
            /*mvSpringRope.Release end.*/

            /*mvSpringRope.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "mvSpringRope#LateUpdate", this ); }

                this.UpdateSpringRope();
            },
            /*mvSpringRope.LateUpdate end.*/

            /*mvSpringRope.UpdateSpringRope start.*/
            UpdateSpringRope: function () {
if ( TRACE ) { TRACE( "mvSpringRope#UpdateSpringRope", this ); }

                if (UnityEngine.Component.op_Equality(this.throwTransform, null)) {
                    return;
                }
                if (this.isOnAction) {
                    if (this.lineRenderer.positionCount === 0) {
                        this.spring.SetVelocity(this.velocity);
                        this.lineRenderer.positionCount = (this.quality + 1) | 0;
                        this.releaseQuality = this.quality;
                    }
                    this.spring.SetDamper(this.damper);
                    this.spring.SetStrength(this.strength);
                    this.spring.Update(UnityEngine.Time.deltaTime);
                    var up = new pc.Quat().setLookAt( (this.targetPosition.position.$clone().sub( this.throwTransform.position )).clone().normalize(), pc.Vec3.UP ).transformVector( pc.Vec3.UP.clone() );
                    this.currentGrapplePosition = new pc.Vec3().lerp( this.currentGrapplePosition, this.targetPosition.position, UnityEngine.Time.deltaTime * this.ropeSpeed );
                    this.lineRenderer.SetPosition(0, this.throwTransform1.position);
                    for (var j = 1; j < ((this.quality + 1) | 0); j = (j + 1) | 0) {
                        var delta2 = j / this.quality;
                        var offset2 = up.$clone().clone().scale( this.waveHeight ).clone().scale( Math.sin(delta2 * this.waveCount * 3.14159274) ).clone().scale( this.spring.Value ).clone().scale( this.affectCurve.value(delta2) );
                        this.lineRenderer.SetPosition(j, new pc.Vec3().lerp( this.throwTransform.position, this.currentGrapplePosition, delta2 ).add( offset2 ));
                    }
                    return;
                }
                if (this.releaseImmediately) {
                    this.currentGrapplePosition = this.throwTransform.position.$clone();
                    this.spring.Reset();
                    this.lineRenderer.positionCount = 0;
                    return;
                }
                this.spring.Update(UnityEngine.Time.deltaTime);
                this.currentGrapplePosition = new pc.Vec3().lerp( this.currentGrapplePosition, this.throwTransform.position, UnityEngine.Time.deltaTime * this.ropeSpeed * 2.0 );
                var right = new pc.Quat().setLookAt( (this.currentGrapplePosition.$clone().sub( this.throwTransform.position )).clone().normalize(), pc.Vec3.UP ).transformVector( pc.Vec3.RIGHT.clone() );
                if (UnityEngine.Mathf.Approximately((this.currentGrapplePosition.$clone().sub( this.throwTransform.position )).lengthSq(), 2.0)) {
                    this.releaseImmediately = true;
                    return;
                }
                this.lineRenderer.SetPosition(0, this.throwTransform1.position);
                for (var i = 1; i < ((this.releaseQuality + 1) | 0); i = (i + 1) | 0) {
                    var delta = i / this.releaseQuality;
                    var offset = right.$clone().clone().scale( this.waveHeight ).clone().scale( Math.sin(delta * 2.0 * 3.14159274) ).clone().scale( this.spring.Value ).clone().scale( this.affectCurve.value(delta) );
                    this.lineRenderer.SetPosition(i, new pc.Vec3().lerp( this.throwTransform.position, this.currentGrapplePosition, delta ).add( offset ));
                }
            },
            /*mvSpringRope.UpdateSpringRope end.*/


        },
        overloads: {
            "SetThrowTransform(Transform, Transform)": "SetThrowTransform$1"
        }
    });
    /*mvSpringRope end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            anim: null
        },
        methods: {
            /*PlayerController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerController#Start", this ); }

                this.anim.Play$1("Run");
            },
            /*PlayerController.Start end.*/

            /*PlayerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerController#Update", this ); }
 },
            /*PlayerController.Update end.*/


        }
    });
    /*PlayerController end.*/

    /*SmoothShakeFree.ShakeBase start.*/
    Bridge.define("SmoothShakeFree.ShakeBase", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            timeSettings: null,
            willStop: false,
            shakers: null,
            activeShakeRoutines: null,
            clearAfterFinished: null,
            sum: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#init", this ); }

                this.timeSettings = new SmoothShakeFree.TimeSettings();
                this.willStop = false;
                this.activeShakeRoutines = new (System.Collections.Generic.List$1(UnityEngine.Coroutine)).ctor();
            }
        },
        methods: {
            /*SmoothShakeFree.ShakeBase.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#Awake", this ); }

                this.shakers = this.GetShakers();
                this.sum = System.Array.init(this.shakers.length, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                if (this.timeSettings.enableOnStart) {
                    this.StartShake();
                }
            },
            /*SmoothShakeFree.ShakeBase.Awake end.*/

            /*SmoothShakeFree.ShakeBase.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#Start", this ); }

                if (this.timeSettings.enableOnStart) {
                    this.StartShake();
                }
            },
            /*SmoothShakeFree.ShakeBase.Start end.*/

            /*SmoothShakeFree.ShakeBase.StartShake start.*/
            StartShake: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#StartShake", this ); }

                this.willStop = false;
                if (this.activeShakeRoutines.Count === 0) {
                    this.clearAfterFinished = this.StartCoroutine$1(this.ClearAfterFinished());
                    this.SaveDefaultValues();
                    for (var i = 0; i < this.shakers.length; i = (i + 1) | 0) {
                        this.activeShakeRoutines.add(this.StartCoroutine$1(this.ShakeRoutine(this.shakers[i], this.timeSettings.$clone(), i)));
                    }
                } else {
                    this.ForceStop();
                    this.StartShake();
                }
            },
            /*SmoothShakeFree.ShakeBase.StartShake end.*/

            /*SmoothShakeFree.ShakeBase.StartShake$1 start.*/
            StartShake$1: function (preset) {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#StartShake$1", this ); }

                this.ApplyPresetSettings(preset);
                this.StartShake();
            },
            /*SmoothShakeFree.ShakeBase.StartShake$1 end.*/

            /*SmoothShakeFree.ShakeBase.StopShake start.*/
            StopShake: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#StopShake", this ); }

                this.willStop = true;
            },
            /*SmoothShakeFree.ShakeBase.StopShake end.*/

            /*SmoothShakeFree.ShakeBase.ForceStop start.*/
            ForceStop: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#ForceStop", this ); }

                for (var j = 0; j < this.activeShakeRoutines.Count; j = (j + 1) | 0) {
                    if (this.activeShakeRoutines.getItem(j) != null) {
                        this.StopCoroutine$2(this.activeShakeRoutines.getItem(j));
                        this.activeShakeRoutines.setItem(j, null);
                    }
                }
                if (this.clearAfterFinished != null) {
                    this.StopCoroutine$2(this.clearAfterFinished);
                    this.clearAfterFinished = null;
                }
                for (var i = 0; i < this.sum.length; i = (i + 1) | 0) {
                    this.sum[i] = pc.Vec3.ZERO.clone();
                }
                this.activeShakeRoutines.clear();
                this.ResetDefaultValues();
                this.willStop = false;
            },
            /*SmoothShakeFree.ShakeBase.ForceStop end.*/

            /*SmoothShakeFree.ShakeBase.ClearAfterFinished start.*/
            ClearAfterFinished: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#ClearAfterFinished", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.timeSettings.constantShake) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 6;
                                            continue;
                                        }
                                }
                                case 1: {
                                    if ( !this.willStop ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.timeSettings.fadeOutDuration);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    this.ForceStop();
                                    $step = 8;
                                    continue;
                                }
                                case 6: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this.timeSettings.GetShakeDuration());
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    this.ForceStop();
                                    $step = 8;
                                    continue;
                                }
                                case 8: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SmoothShakeFree.ShakeBase.ClearAfterFinished end.*/

            /*SmoothShakeFree.ShakeBase.ShakeRoutine start.*/
            ShakeRoutine: function (shaker, timeSettings, i) {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#ShakeRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    isFadingOut2,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    isFadingOut2 = false;
                                        if (timeSettings.fadeInDuration > 0.0) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 3;
                                        continue;
                                }
                                case 1: {
                                    $enumerator.current = this.FadeRoutine(this.timeSettings.fadeInCurve, shaker, timeSettings.$clone(), isFadingOut2, i);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    $step = 3;
                                    continue;
                                }
                                case 3: {
                                    if (timeSettings.holdDuration > 0.0 && !this.timeSettings.constantShake) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 4: {
                                    $enumerator.current = this.HoldRoutine(timeSettings.holdDuration, shaker, timeSettings.$clone(), i);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    $step = 6;
                                    continue;
                                }
                                case 6: {
                                    if (this.timeSettings.constantShake) {
                                            $step = 7;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 7: {
                                    $enumerator.current = this.HoldRoutine(Number.POSITIVE_INFINITY, shaker, timeSettings.$clone(), i);
                                        $step = 8;
                                        return true;
                                }
                                case 8: {
                                    $step = 9;
                                    continue;
                                }
                                case 9: {
                                    isFadingOut2 = true;
                                        if (timeSettings.fadeOutDuration > 0.0) {
                                            $step = 10;
                                            continue;
                                        } 
                                        $step = 12;
                                        continue;
                                }
                                case 10: {
                                    $enumerator.current = this.FadeRoutine(this.timeSettings.fadeOutCurve, shaker, timeSettings.$clone(), isFadingOut2, i);
                                        $step = 11;
                                        return true;
                                }
                                case 11: {
                                    $step = 12;
                                    continue;
                                }
                                case 12: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SmoothShakeFree.ShakeBase.ShakeRoutine end.*/

            /*SmoothShakeFree.ShakeBase.FadeRoutine start.*/
            FadeRoutine: function (curve, shaker, timeSettings, isFadingOut, i) {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#FadeRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    keys,
                    tEnd,
                    t,
                    remappedTime,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (curve.keys.length <= 1) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    if (isFadingOut && timeSettings.holdDuration === 0.0 && timeSettings.fadeInDuration === 0.0) {
                                            timeSettings.fadeValue = 1.0;
                                        }
                                        keys = curve.keys;
                                        tEnd = (isFadingOut ? timeSettings.fadeOutDuration : timeSettings.fadeInDuration);
                                        t = 0.0;
                                        $step = 3;
                                        continue;
                                }
                                case 3: {
                                    if ( t < tEnd ) {
                                            $step = 4;
                                            continue;
                                        }
                                    $step = 9;
                                    continue;
                                }
                                case 4: {
                                    if (!isFadingOut && this.willStop) {
                                            $step = 5;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 5: {
                                    return false;
                                }
                                case 6: {
                                    remappedTime = SmoothShakeFree.Utility.Remap(t, 0.0, tEnd, keys[0].time, keys[((keys.length - 1) | 0)].time);
                                        timeSettings.fadeValue = curve.value(remappedTime);
                                        this.Execute(shaker, timeSettings.$clone(), i);
                                        $enumerator.current = null;
                                        $step = 7;
                                        return true;
                                }
                                case 7: {
                                    $step = 8;
                                    continue;
                                }
                                case 8: {
                                    t += UnityEngine.Time.deltaTime;
                                    $step = 3;
                                    continue;
                                }
                                case 9: {
                                    timeSettings.fadeValue = SmoothShakeFree.Utility.Remap(curve.value(keys[((keys.length - 1) | 0)].time), keys[0].value, keys[((keys.length - 1) | 0)].value, isFadingOut ? 1 : 0, (!isFadingOut) ? 1 : 0);
                                        this.Execute(shaker, timeSettings.$clone(), i);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SmoothShakeFree.ShakeBase.FadeRoutine end.*/

            /*SmoothShakeFree.ShakeBase.HoldRoutine start.*/
            HoldRoutine: function (duration, shaker, timeSettings, i) {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#HoldRoutine", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    t,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (timeSettings.fadeValue === 0.0) {
                                            timeSettings.fadeValue = 1.0;
                                        }
                                        t = 0.0;
                                        if ((Math.abs(duration) === Number.POSITIVE_INFINITY)) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 1: {
                                    if ( !this.willStop ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this.Execute(shaker, timeSettings.$clone(), i);
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    return false;
                                }
                                case 5: {
                                    
                                        $step = 6;
                                        continue;
                                }
                                case 6: {
                                    if ( t < duration ) {
                                            $step = 7;
                                            continue;
                                        }
                                    $step = 12;
                                    continue;
                                }
                                case 7: {
                                    if (this.willStop) {
                                            $step = 8;
                                            continue;
                                        } 
                                        $step = 9;
                                        continue;
                                }
                                case 8: {
                                    return false;
                                }
                                case 9: {
                                    this.Execute(shaker, timeSettings.$clone(), i);
                                        $enumerator.current = null;
                                        $step = 10;
                                        return true;
                                }
                                case 10: {
                                    $step = 11;
                                    continue;
                                }
                                case 11: {
                                    t += UnityEngine.Time.deltaTime;
                                    $step = 6;
                                    continue;
                                }
                                case 12: {
                                    if (timeSettings.fadeOutDuration === 0.0) {
                                            timeSettings.fadeValue = 0.0;
                                            this.Execute(shaker, timeSettings.$clone(), i);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SmoothShakeFree.ShakeBase.HoldRoutine end.*/

            /*SmoothShakeFree.ShakeBase.Execute start.*/
            Execute: function (shaker, timeSettings, i) {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#Execute", this ); }

                this.sum[i] = shaker.Evaluate(UnityEngine.Time.time).clone().scale( timeSettings.fadeValue );
            },
            /*SmoothShakeFree.ShakeBase.Execute end.*/

            /*SmoothShakeFree.ShakeBase.ApplySum start.*/
            ApplySum: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#ApplySum", this ); }

                this.Apply(this.sum);
            },
            /*SmoothShakeFree.ShakeBase.ApplySum end.*/

            /*SmoothShakeFree.ShakeBase.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.ShakeBase#Update", this ); }

                if (this.activeShakeRoutines.Count > 0) {
                    this.ApplySum();
                }
            },
            /*SmoothShakeFree.ShakeBase.Update end.*/


        },
        overloads: {
            "StartShake(SmoothShakeFreePreset)": "StartShake$1"
        }
    });
    /*SmoothShakeFree.ShakeBase end.*/

    /*SmoothShakeFree.Shaker start.*/
    Bridge.define("SmoothShakeFree.Shaker", {
        fields: {
            noiseType: 0,
            amplitude: null,
            frequency: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.Shaker#init", this ); }

                this.amplitude = new UnityEngine.Vector3();
                this.frequency = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*SmoothShakeFree.Shaker.Evaluate start.*/
            Evaluate: function (t) {
if ( TRACE ) { TRACE( "SmoothShakeFree.Shaker#Evaluate", this ); }

                var modified = Bridge.getDefaultValue(UnityEngine.Vector3);
                modified.x = this.EvaluateBase(t, this.amplitude.x, this.frequency.x);
                modified.y = this.EvaluateBase(t, this.amplitude.y, this.frequency.y);
                modified.z = this.EvaluateBase(t, this.amplitude.z, this.frequency.z);
                return modified.$clone();
            },
            /*SmoothShakeFree.Shaker.Evaluate end.*/

            /*SmoothShakeFree.Shaker.EvaluateBase start.*/
            EvaluateBase: function (t, amplitude, frequency) {
if ( TRACE ) { TRACE( "SmoothShakeFree.Shaker#EvaluateBase", this ); }

                var noiseType = this.noiseType;
                if (false) {
                }
                var result;
                switch (noiseType) {
                    case SmoothShakeFree.Shaker.NoiseType.SineWave: 
                        result = amplitude * this.EvaluateSinewave(frequency * t);
                        break;
                    case SmoothShakeFree.Shaker.NoiseType.WhiteNoise: 
                        result = amplitude * this.EvaluateWhiteNoise();
                        break;
                    default: 
                        throw new System.Exception("Unknown noise type");
                }
                if (false) {
                }
                return result;
            },
            /*SmoothShakeFree.Shaker.EvaluateBase end.*/

            /*SmoothShakeFree.Shaker.EvaluateSinewave start.*/
            EvaluateSinewave: function (t) {
if ( TRACE ) { TRACE( "SmoothShakeFree.Shaker#EvaluateSinewave", this ); }

                return Math.sin(6.28318548 * t);
            },
            /*SmoothShakeFree.Shaker.EvaluateSinewave end.*/

            /*SmoothShakeFree.Shaker.EvaluateWhiteNoise start.*/
            EvaluateWhiteNoise: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.Shaker#EvaluateWhiteNoise", this ); }

                return UnityEngine.Random.Range$1(-1.0, 1.0);
            },
            /*SmoothShakeFree.Shaker.EvaluateWhiteNoise end.*/


        }
    });
    /*SmoothShakeFree.Shaker end.*/

    /*SmoothShakeFree.Shaker+NoiseType start.*/
    Bridge.define("SmoothShakeFree.Shaker.NoiseType", {
        $kind: 1006,
        statics: {
            fields: {
                SineWave: 0,
                WhiteNoise: 1
            }
        }
    });
    /*SmoothShakeFree.Shaker+NoiseType end.*/

    /*SmoothShakeFree.SmoothShakeFreePreset start.*/
    Bridge.define("SmoothShakeFree.SmoothShakeFreePreset", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            timeSettings: null,
            positionShake: null,
            rotationShake: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.SmoothShakeFreePreset#init", this ); }

                this.timeSettings = new SmoothShakeFree.TimeSettings();
                this.positionShake = new SmoothShakeFree.Shaker();
                this.rotationShake = new SmoothShakeFree.Shaker();
            }
        }
    });
    /*SmoothShakeFree.SmoothShakeFreePreset end.*/

    /*SmoothShakeFree.TimeSettings start.*/
    Bridge.define("SmoothShakeFree.TimeSettings", {
        $kind: 4,
        statics: {
            methods: {
                getDefaultValue: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.TimeSettings#getDefaultValue", this ); }
 return new SmoothShakeFree.TimeSettings(); }
            }
        },
        fields: {
            fadeValue: 0,
            enableOnStart: false,
            constantShake: false,
            fadeInDuration: 0,
            fadeInCurve: null,
            holdDuration: 0,
            fadeOutDuration: 0,
            fadeOutCurve: null
        },
        ctors: {
            ctor: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.TimeSettings#ctor", this ); }

                this.$initialize();
            }
        },
        methods: {
            /*SmoothShakeFree.TimeSettings.GetShakeDuration start.*/
            GetShakeDuration: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.TimeSettings#GetShakeDuration", this ); }

                return this.fadeInDuration + this.holdDuration + this.fadeOutDuration;
            },
            /*SmoothShakeFree.TimeSettings.GetShakeDuration end.*/

            getHashCode: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.TimeSettings#getHashCode", this ); }

                var h = Bridge.addHash([5591612688, this.fadeValue, this.enableOnStart, this.constantShake, this.fadeInDuration, this.fadeInCurve, this.holdDuration, this.fadeOutDuration, this.fadeOutCurve]);
                return h;
            },
            equals: function (o) {
if ( TRACE ) { TRACE( "SmoothShakeFree.TimeSettings#equals", this ); }

                if (!Bridge.is(o, SmoothShakeFree.TimeSettings)) {
                    return false;
                }
                return Bridge.equals(this.fadeValue, o.fadeValue) && Bridge.equals(this.enableOnStart, o.enableOnStart) && Bridge.equals(this.constantShake, o.constantShake) && Bridge.equals(this.fadeInDuration, o.fadeInDuration) && Bridge.equals(this.fadeInCurve, o.fadeInCurve) && Bridge.equals(this.holdDuration, o.holdDuration) && Bridge.equals(this.fadeOutDuration, o.fadeOutDuration) && Bridge.equals(this.fadeOutCurve, o.fadeOutCurve);
            },
            $clone: function (to) {
if ( TRACE ) { TRACE( "SmoothShakeFree.TimeSettings#$clone", this ); }

                var s = to || new SmoothShakeFree.TimeSettings();
                s.fadeValue = this.fadeValue;
                s.enableOnStart = this.enableOnStart;
                s.constantShake = this.constantShake;
                s.fadeInDuration = this.fadeInDuration;
                s.fadeInCurve = this.fadeInCurve;
                s.holdDuration = this.holdDuration;
                s.fadeOutDuration = this.fadeOutDuration;
                s.fadeOutCurve = this.fadeOutCurve;
                return s;
            }
        }
    });
    /*SmoothShakeFree.TimeSettings end.*/

    /*SmoothShakeFree.Utility start.*/
    Bridge.define("SmoothShakeFree.Utility", {
        statics: {
            methods: {
                /*SmoothShakeFree.Utility.Remap:static start.*/
                Remap: function (valueInput, oldRangeMin, oldRangeMax, newRangeMin, newRangeMax) {
if ( TRACE ) { TRACE( "SmoothShakeFree.Utility#Remap", this ); }

                    return newRangeMin + (valueInput - oldRangeMin) * (newRangeMax - newRangeMin) / (oldRangeMax - oldRangeMin);
                },
                /*SmoothShakeFree.Utility.Remap:static end.*/


            }
        }
    });
    /*SmoothShakeFree.Utility end.*/

    /*SpiderController start.*/
    Bridge.define("SpiderController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            ropeL: null,
            ropeR: null,
            handL: null,
            handR: null,
            targetL: null,
            targetR: null,
            ropePosition: null,
            manager: null
        },
        methods: {
            /*SpiderController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SpiderController#Start", this ); }

                this.ropeL.SetThrowTransform(this.handL);
                this.ropeR.SetThrowTransform(this.handR);
                this.ropePosition = new UnityEngine.GameObject.$ctor2("ropePosition");
            },
            /*SpiderController.Start end.*/

            /*SpiderController.OnThrowRope start.*/
            OnThrowRope: function (targetL, targetR) {
if ( TRACE ) { TRACE( "SpiderController#OnThrowRope", this ); }

                this.ropeL.Throw(targetL);
                this.ropeR.Throw(targetR);
            },
            /*SpiderController.OnThrowRope end.*/

            /*SpiderController.ThrowRopeL start.*/
            ThrowRopeL: function () {
if ( TRACE ) { TRACE( "SpiderController#ThrowRopeL", this ); }

                this.ropeL.Throw(this.targetL);
            },
            /*SpiderController.ThrowRopeL end.*/

            /*SpiderController.ThrowRopeR start.*/
            ThrowRopeR: function () {
if ( TRACE ) { TRACE( "SpiderController#ThrowRopeR", this ); }

                this.ropeR.Throw(this.targetR);
            },
            /*SpiderController.ThrowRopeR end.*/

            /*SpiderController.Release start.*/
            Release: function () {
if ( TRACE ) { TRACE( "SpiderController#Release", this ); }

                this.ropeL.Release();
                this.ropeR.Release();
            },
            /*SpiderController.Release end.*/

            /*SpiderController.ThrowRopeLeftAnim start.*/
            ThrowRopeLeftAnim: function () {
if ( TRACE ) { TRACE( "SpiderController#ThrowRopeLeftAnim", this ); }

                this.ropePosition.transform.position = this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 30.0 ) ).add( this.transform.forward.$clone().clone().scale( 10.0 ) );
                this.ropeL.Throw(this.ropePosition.transform);
                if (UnityEngine.MonoBehaviour.op_Inequality(this.manager, null)) {
                    this.manager.hookSound.Play();
                }
            },
            /*SpiderController.ThrowRopeLeftAnim end.*/

            /*SpiderController.ThrowRopeRightAnim start.*/
            ThrowRopeRightAnim: function () {
if ( TRACE ) { TRACE( "SpiderController#ThrowRopeRightAnim", this ); }

                this.ropePosition.transform.position = this.transform.position.$clone().add( pc.Vec3.UP.clone().clone().scale( 30.0 ) ).add( this.transform.forward.$clone().clone().scale( 10.0 ) );
                this.ropeR.Throw(this.ropePosition.transform);
            },
            /*SpiderController.ThrowRopeRightAnim end.*/


        }
    });
    /*SpiderController end.*/

    /*SpiderFly start.*/
    Bridge.define("SpiderFly", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            rid: null,
            controller: null,
            animator: null,
            punchPoint: null,
            gameManager: null,
            handEff: null,
            effectExplosion: null,
            enemies: null,
            btFullGame: null,
            guideHook: null,
            clips: null,
            swingSound: null,
            isPunch: false,
            lightingSound: null,
            exploseSound: null,
            swingCount: 0,
            velocity: 0,
            isMove: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SpiderFly#init", this ); }

                this.isPunch = false;
                this.swingCount = 0;
                this.isMove = false;
            }
        },
        methods: {
            /*SpiderFly.OnAddForce start.*/
            OnAddForce: function () {
if ( TRACE ) { TRACE( "SpiderFly#OnAddForce", this ); }

                this.swingCount = (this.swingCount + 1) | 0;
                this.rid.velocity = pc.Vec3.ZERO.clone();
                this.controller.Release();
                var vector = new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), UnityEngine.Random.Range$1(-5.0, 5.0) ).transformVector( this.transform.forward );
                if (this.swingCount >= 3) {
                    var tmp = this.punchPoint.position.$clone();
                    tmp.y = this.transform.position.y;
                    this.transform.LookAt$3(tmp, pc.Vec3.UP.clone());
                    vector = this.transform.forward.$clone();
                }
                this.transform.forward = vector.$clone();
                var forceDirection = vector.$clone().add( pc.Vec3.UP.clone() );
                this.rid.AddForce$1(forceDirection.$clone().clone().scale( UnityEngine.Random.Range(40000, 50000) ), UnityEngine.ForceMode.Force);
                var index = UnityEngine.Random.Range(0, this.clips.length);
                this.swingSound.PlayOneShot(this.clips[index]);
            },
            /*SpiderFly.OnAddForce end.*/

            /*SpiderFly.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "SpiderFly#OnTriggerEnter", this ); }

                if (Bridge.referenceEquals(other.gameObject.tag, "jump") && this.rid.velocity.y < 0.0 && this.animator.GetCurrentAnimatorStateInfo(0).IsName("fall")) {
                    UnityEngine.Time.timeScale = 0.0;
                    this.guideHook.SetActive(true);
                }
                if (Bridge.referenceEquals(other.gameObject.tag, "punch") && !this.isPunch) {
                    this.rid.velocity = pc.Vec3.ZERO.clone();
                    this.rid.isKinematic = true;
                    UnityEngine.Time.timeScale = 0.0;
                    this.gameManager.btSwing.SetActive(false);
                    this.gameManager.btSkill.SetActive(true);
                }
            },
            /*SpiderFly.OnTriggerEnter end.*/

            /*SpiderFly.OnSkillClick start.*/
            OnSkillClick: function () {
if ( TRACE ) { TRACE( "SpiderFly#OnSkillClick", this ); }

                this.isPunch = true;
                this.gameManager.btSkill.SetActive(false);
                this.animator.Play$2("skill2");
                this.handEff.Play();
                this.effectExplosion.Play();
                UnityEngine.Time.timeScale = 1.0;
                this.StartCoroutine$1(this.StartPunch());
            },
            /*SpiderFly.OnSkillClick end.*/

            /*SpiderFly.StartPunch start.*/
            StartPunch: function () {
if ( TRACE ) { TRACE( "SpiderFly#StartPunch", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.gameManager.ChangePlayerCam1();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.2);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    for (var i = 0; i < this.enemies.length; i = (i + 1) | 0) {
                                            this.enemies[i].Play$2("down");
                                        }
                                        this.exploseSound.Play();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    Luna.Unity.LifeCycle.GameEnded();
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    this.btFullGame.SetActive(true);
                                        Luna.Unity.Playable.InstallFullGame();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*SpiderFly.StartPunch end.*/

            /*SpiderFly.OnStartLighting start.*/
            OnStartLighting: function () {
if ( TRACE ) { TRACE( "SpiderFly#OnStartLighting", this ); }

                this.handEff.Play();
                this.lightingSound.Play();
            },
            /*SpiderFly.OnStartLighting end.*/

            /*SpiderFly.OnEndLighting start.*/
            OnEndLighting: function () {
if ( TRACE ) { TRACE( "SpiderFly#OnEndLighting", this ); }

                this.handEff.gameObject.SetActive(false);
            },
            /*SpiderFly.OnEndLighting end.*/

            /*SpiderFly.OnStartMove start.*/
            OnStartMove: function () {
if ( TRACE ) { TRACE( "SpiderFly#OnStartMove", this ); }

                var distance = pc.Vec3.distance( this.transform.position, this.punchPoint.position );
                this.velocity = distance * 2.0;
                this.isMove = true;
            },
            /*SpiderFly.OnStartMove end.*/

            /*SpiderFly.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "SpiderFly#Update", this ); }

                if (this.isMove) {
                    this.transform.position = new pc.Vec3().lerp( this.transform.position, this.punchPoint.position, UnityEngine.Time.deltaTime * this.velocity );
                }
            },
            /*SpiderFly.Update end.*/


        }
    });
    /*SpiderFly end.*/

    /*SmoothShakeFree.SmoothShake start.*/
    Bridge.define("SmoothShakeFree.SmoothShake", {
        inherits: [SmoothShakeFree.ShakeBase],
        fields: {
            preset: null,
            positionShake: null,
            rotationShake: null,
            startPosition: null,
            startRotation: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.SmoothShake#init", this ); }

                this.startPosition = new UnityEngine.Vector3();
                this.startRotation = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*SmoothShakeFree.SmoothShake.Apply start.*/
            Apply: function (value) {
if ( TRACE ) { TRACE( "SmoothShakeFree.SmoothShake#Apply", this ); }

                this.transform.localPosition = this.startPosition.$clone().add( value[0] );
                this.transform.localEulerAngles = this.startRotation.$clone().add( value[1] );
            },
            /*SmoothShakeFree.SmoothShake.Apply end.*/

            /*SmoothShakeFree.SmoothShake.GetShakers start.*/
            GetShakers: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.SmoothShake#GetShakers", this ); }

                return System.Array.init([this.positionShake, this.rotationShake], SmoothShakeFree.Shaker);
            },
            /*SmoothShakeFree.SmoothShake.GetShakers end.*/

            /*SmoothShakeFree.SmoothShake.ResetDefaultValues start.*/
            ResetDefaultValues: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.SmoothShake#ResetDefaultValues", this ); }

                this.transform.localPosition = this.startPosition.$clone();
                this.transform.localEulerAngles = this.startRotation.$clone();
            },
            /*SmoothShakeFree.SmoothShake.ResetDefaultValues end.*/

            /*SmoothShakeFree.SmoothShake.SaveDefaultValues start.*/
            SaveDefaultValues: function () {
if ( TRACE ) { TRACE( "SmoothShakeFree.SmoothShake#SaveDefaultValues", this ); }

                this.startPosition = this.transform.localPosition.$clone();
                this.startRotation = this.transform.localEulerAngles.$clone();
            },
            /*SmoothShakeFree.SmoothShake.SaveDefaultValues end.*/

            /*SmoothShakeFree.SmoothShake.ApplyPresetSettings start.*/
            ApplyPresetSettings: function (preset) {
if ( TRACE ) { TRACE( "SmoothShakeFree.SmoothShake#ApplyPresetSettings", this ); }

                this.positionShake.noiseType = preset.positionShake.noiseType;
                this.positionShake.amplitude = preset.positionShake.amplitude.$clone();
                this.positionShake.frequency = preset.positionShake.frequency.$clone();
                this.rotationShake.noiseType = preset.rotationShake.noiseType;
                this.rotationShake.amplitude = preset.rotationShake.amplitude.$clone();
                this.rotationShake.frequency = preset.rotationShake.frequency.$clone();
                this.timeSettings.enableOnStart = preset.timeSettings.enableOnStart;
                this.timeSettings.constantShake = preset.timeSettings.constantShake;
                this.timeSettings.fadeInDuration = preset.timeSettings.fadeInDuration;
                this.timeSettings.fadeOutDuration = preset.timeSettings.fadeOutDuration;
                this.timeSettings.fadeInCurve = preset.timeSettings.fadeInCurve;
                this.timeSettings.fadeOutCurve = preset.timeSettings.fadeOutCurve;
                this.timeSettings.holdDuration = preset.timeSettings.holdDuration;
            },
            /*SmoothShakeFree.SmoothShake.ApplyPresetSettings end.*/


        }
    });
    /*SmoothShakeFree.SmoothShake end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine.UI","UnityEngine","System.Collections","SmoothShakeFree","System.Collections.Generic"];

    /*ButtonHook start.*/
    $m("ButtonHook", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnClick","t":8,"sn":"OnClick","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"gameManager","t":4,"rt":GameManagerSwing,"sn":"gameManager"},{"a":1,"n":"isReady","t":4,"rt":$n[0].Boolean,"sn":"isReady","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"process","t":4,"rt":$n[1].Image,"sn":"process"},{"a":1,"n":"timecount","t":4,"rt":$n[0].Single,"sn":"timecount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waitTime","t":4,"rt":$n[0].Single,"sn":"waitTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*ButtonHook end.*/

    /*ButtonStopCar start.*/
    $m("ButtonStopCar", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnClick","t":8,"sn":"OnClick","rt":$n[0].Void},{"a":2,"n":"OnDown","t":8,"sn":"OnDown","rt":$n[0].Void},{"a":2,"n":"OnUp","t":8,"sn":"OnUp","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"bus","t":4,"rt":CrimeBus,"sn":"bus"},{"a":2,"n":"imgProcess","t":4,"rt":$n[1].Image,"sn":"imgProcess"},{"a":1,"n":"isDown","t":4,"rt":$n[0].Boolean,"sn":"isDown","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"percent","t":4,"rt":$n[0].Single,"sn":"percent","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"textPercent","t":4,"rt":$n[1].Text,"sn":"textPercent"}]}; }, $n);
    /*ButtonStopCar end.*/

    /*CameraFollow start.*/
    $m("CameraFollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"lookAtPoint","t":4,"rt":$n[2].Transform,"sn":"lookAtPoint"},{"a":2,"n":"lookAtVelocity","t":4,"rt":$n[0].Single,"sn":"lookAtVelocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"mainCamera","t":4,"rt":$n[2].Transform,"sn":"mainCamera"},{"a":2,"n":"positionPoint","t":4,"rt":$n[2].Transform,"sn":"positionPoint"},{"a":2,"n":"positionVelocity","t":4,"rt":$n[0].Single,"sn":"positionVelocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tmpCam","t":4,"rt":$n[2].Transform,"sn":"tmpCam"}]}; }, $n);
    /*CameraFollow end.*/

    /*CrimeBus start.*/
    $m("CrimeBus", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CrashDoor","t":8,"sn":"CrashDoor","rt":$n[0].Void},{"a":2,"n":"OnPlayerKick","t":8,"sn":"OnPlayerKick","rt":$n[0].Void},{"a":2,"n":"SetPlayer","t":8,"pi":[{"n":"player","pt":$n[2].Transform,"ps":0},{"n":"camPoint","pt":$n[2].Transform,"ps":1}],"sn":"SetPlayer","rt":$n[0].Void,"p":[$n[2].Transform,$n[2].Transform]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartKick","t":8,"sn":"StartKick","rt":$n[3].IEnumerator},{"a":2,"n":"Stop","t":8,"sn":"Stop","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_player","t":4,"rt":$n[2].Transform,"sn":"_player"},{"a":2,"n":"breakDoor","t":4,"rt":$n[2].GameObject,"sn":"breakDoor"},{"a":2,"n":"btKick","t":4,"rt":$n[2].GameObject,"sn":"btKick"},{"a":2,"n":"camForcus4","t":4,"rt":$n[2].Transform,"sn":"camForcus4"},{"a":2,"n":"camLook","t":4,"rt":LookAtPlayer,"sn":"camLook"},{"a":2,"n":"camPointTarget","t":4,"rt":$n[2].Transform,"sn":"camPointTarget"},{"a":2,"n":"camStep3","t":4,"rt":$n[2].Transform,"sn":"camStep3"},{"a":2,"n":"camStep4","t":4,"rt":$n[2].Transform,"sn":"camStep4"},{"a":1,"n":"cameraParent","t":4,"rt":$n[2].Transform,"sn":"cameraParent"},{"a":2,"n":"carEngine","t":4,"rt":$n[2].AudioSource,"sn":"carEngine"},{"a":2,"n":"driver","t":4,"rt":$n[2].GameObject,"sn":"driver"},{"a":1,"n":"isEndGame","t":4,"rt":$n[0].Boolean,"sn":"isEndGame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isStop","t":4,"rt":$n[0].Boolean,"sn":"isStop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"kickSound","t":4,"rt":$n[2].AudioSource,"sn":"kickSound"},{"a":2,"n":"playNow","t":4,"rt":$n[2].GameObject,"sn":"playNow"},{"a":1,"n":"playerAnim","t":4,"rt":$n[2].Animator,"sn":"playerAnim"},{"a":2,"n":"playerParent","t":4,"rt":$n[2].Transform,"sn":"playerParent"},{"a":2,"n":"smoke1","t":4,"rt":$n[2].ParticleSystem,"sn":"smoke1"},{"a":2,"n":"smoke2","t":4,"rt":$n[2].ParticleSystem,"sn":"smoke2"},{"a":2,"n":"spiderController","t":4,"rt":SpiderController,"sn":"spiderController"},{"a":1,"n":"step","t":4,"rt":$n[0].Int32,"sn":"step","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"step2","t":4,"rt":$n[2].Transform,"sn":"step2"},{"a":2,"n":"step3","t":4,"rt":$n[2].Transform,"sn":"step3"},{"a":2,"n":"step4","t":4,"rt":$n[2].Transform,"sn":"step4"},{"a":2,"n":"stopCarView","t":4,"rt":$n[2].GameObject,"sn":"stopCarView"},{"a":1,"n":"tmp","t":4,"rt":$n[0].Single,"sn":"tmp","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"trail","t":4,"rt":$n[2].GameObject,"sn":"trail"}]}; }, $n);
    /*CrimeBus end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Jump","t":8,"sn":"Jump","rt":$n[0].Void},{"a":2,"n":"Kick","t":8,"sn":"Kick","rt":$n[0].Void},{"a":2,"n":"OnButtonClick","t":8,"sn":"OnButtonClick","rt":$n[0].Void},{"a":2,"n":"OnPlayNowClick","t":8,"sn":"OnPlayNowClick","rt":$n[0].Void},{"a":1,"n":"PauseGameplay","t":8,"sn":"PauseGameplay","rt":$n[0].Void},{"a":1,"n":"ResumeGameplay","t":8,"sn":"ResumeGameplay","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[3].IEnumerator},{"a":2,"n":"audioSource","t":4,"rt":$n[2].AudioSource,"sn":"audioSource"},{"a":2,"n":"btJump","t":4,"rt":$n[2].GameObject,"sn":"btJump"},{"a":2,"n":"bus","t":4,"rt":CrimeBus,"sn":"bus"},{"a":2,"n":"cameraLook","t":4,"rt":LookAtPlayer,"sn":"cameraLook"},{"a":2,"n":"jumpSound","t":4,"rt":$n[2].AudioClip,"sn":"jumpSound"},{"a":2,"n":"kickSound","t":4,"rt":$n[2].AudioClip,"sn":"kickSound"},{"a":2,"n":"kump1Sound","t":4,"rt":$n[2].AudioClip,"sn":"kump1Sound"},{"a":2,"n":"moveController","t":4,"rt":MoveController,"sn":"moveController"},{"a":2,"n":"player","t":4,"rt":$n[2].Animator,"sn":"player"},{"a":2,"n":"tutorial","t":4,"rt":$n[2].Animator,"sn":"tutorial"},{"a":2,"n":"wind","t":4,"rt":$n[2].GameObject,"sn":"wind"}]}; }, $n);
    /*GameManager end.*/

    /*GameManagerSwing start.*/
    $m("GameManagerSwing", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ChangePlayerCam1","t":8,"sn":"ChangePlayerCam1","rt":$n[0].Void},{"a":2,"n":"FullGameClick","t":8,"sn":"FullGameClick","rt":$n[0].Void},{"a":2,"n":"OnHoldDown","t":8,"sn":"OnHoldDown","rt":$n[0].Void},{"a":2,"n":"OnHoldUp","t":8,"sn":"OnHoldUp","rt":$n[0].Void},{"a":2,"n":"OnSwingClick","t":8,"sn":"OnSwingClick","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"btSkill","t":4,"rt":$n[2].GameObject,"sn":"btSkill"},{"a":2,"n":"btStart","t":4,"rt":$n[2].GameObject,"sn":"btStart"},{"a":2,"n":"btSwing","t":4,"rt":$n[2].GameObject,"sn":"btSwing"},{"a":2,"n":"cameraFollow","t":4,"rt":CameraFollow,"sn":"cameraFollow"},{"a":2,"n":"hookSound","t":4,"rt":$n[2].AudioSource,"sn":"hookSound"},{"a":2,"n":"player","t":4,"rt":SpiderController,"sn":"player"},{"a":2,"n":"playerAnim","t":4,"rt":$n[2].Animator,"sn":"playerAnim"},{"a":2,"n":"playerCam","t":4,"rt":$n[2].Transform,"sn":"playerCam"},{"a":2,"n":"playerCam1","t":4,"rt":$n[2].Transform,"sn":"playerCam1"},{"a":2,"n":"playerPelvis","t":4,"rt":$n[2].Transform,"sn":"playerPelvis"},{"a":2,"n":"playerRid","t":4,"rt":$n[2].Rigidbody,"sn":"playerRid"},{"a":2,"n":"targetL","t":4,"rt":$n[2].Transform,"sn":"targetL"},{"a":2,"n":"targetR","t":4,"rt":$n[2].Transform,"sn":"targetR"}]}; }, $n);
    /*GameManagerSwing end.*/

    /*LookAtPlayer start.*/
    $m("LookAtPlayer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"followPoint","t":4,"rt":$n[2].Transform,"sn":"followPoint"},{"a":2,"n":"isActive","t":4,"rt":$n[0].Boolean,"sn":"isActive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lookAtSpeed","t":4,"rt":$n[0].Single,"sn":"lookAtSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"tmpPoint","t":4,"rt":$n[2].Transform,"sn":"tmpPoint"}]}; }, $n);
    /*LookAtPlayer end.*/

    /*MoveController start.*/
    $m("MoveController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnEndMove","t":8,"sn":"OnEndMove","rt":$n[0].Void},{"a":2,"n":"OnStartFollow","t":8,"sn":"OnStartFollow","rt":$n[0].Void},{"a":2,"n":"OnStartLanding","t":8,"sn":"OnStartLanding","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartKick","t":8,"sn":"StartKick","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"btKick","t":4,"rt":$n[2].GameObject,"sn":"btKick"},{"a":2,"n":"bus","t":4,"rt":CrimeBus,"sn":"bus"},{"a":2,"n":"cameraLook","t":4,"rt":LookAtPlayer,"sn":"cameraLook"},{"a":2,"n":"cameraParent","t":4,"rt":$n[2].Transform,"sn":"cameraParent"},{"a":1,"n":"moveCam","t":4,"rt":$n[0].Boolean,"sn":"moveCam","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"playerAnim","t":4,"rt":$n[2].Animator,"sn":"playerAnim"}]}; }, $n);
    /*MoveController end.*/

    /*mvSpring start.*/
    $m("mvSpring", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Reset","t":8,"sn":"Reset","rt":$n[0].Void},{"a":2,"n":"SetDamper","t":8,"pi":[{"n":"damper","pt":$n[0].Single,"ps":0}],"sn":"SetDamper","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetStrength","t":8,"pi":[{"n":"strength","pt":$n[0].Single,"ps":0}],"sn":"SetStrength","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetTarget","t":8,"pi":[{"n":"target","pt":$n[0].Single,"ps":0}],"sn":"SetTarget","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetValue","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0}],"sn":"SetValue","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"SetVelocity","t":8,"pi":[{"n":"velocity","pt":$n[0].Single,"ps":0}],"sn":"SetVelocity","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"Update","t":8,"pi":[{"n":"deltaTime","pt":$n[0].Single,"ps":0}],"sn":"Update","rt":$n[0].Void,"p":[$n[0].Single]},{"a":2,"n":"Value","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Value","t":8,"rt":$n[0].Single,"fg":"Value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Value"},{"a":1,"n":"damper","t":4,"rt":$n[0].Single,"sn":"damper","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"strength","t":4,"rt":$n[0].Single,"sn":"strength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"target","t":4,"rt":$n[0].Single,"sn":"target","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"value","t":4,"rt":$n[0].Single,"sn":"value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"velocity","t":4,"rt":$n[0].Single,"sn":"velocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*mvSpring end.*/

    /*mvSpringRope start.*/
    $m("mvSpringRope", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"a":2,"n":"Release","t":8,"pi":[{"n":"immediate","dv":true,"o":true,"pt":$n[0].Boolean,"ps":0}],"sn":"Release","rt":$n[0].Void,"p":[$n[0].Boolean]},{"a":2,"n":"SetThrowTransform","t":8,"pi":[{"n":"target","pt":$n[2].Transform,"ps":0}],"sn":"SetThrowTransform","rt":$n[0].Void,"p":[$n[2].Transform]},{"a":2,"n":"SetThrowTransform","t":8,"pi":[{"n":"target","pt":$n[2].Transform,"ps":0},{"n":"subTarget","pt":$n[2].Transform,"ps":1}],"sn":"SetThrowTransform$1","rt":$n[0].Void,"p":[$n[2].Transform,$n[2].Transform]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Throw","t":8,"pi":[{"n":"target","pt":$n[2].Transform,"ps":0}],"sn":"Throw","rt":$n[0].Void,"p":[$n[2].Transform]},{"a":1,"n":"UpdateSpringRope","t":8,"sn":"UpdateSpringRope","rt":$n[0].Void},{"a":2,"n":"affectCurve","t":4,"rt":pc.AnimationCurve,"sn":"affectCurve"},{"a":1,"n":"currentGrapplePosition","t":4,"rt":$n[2].Vector3,"sn":"currentGrapplePosition"},{"a":2,"n":"damper","t":4,"rt":$n[0].Single,"sn":"damper","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"isOnAction","t":4,"rt":$n[0].Boolean,"sn":"isOnAction","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lineRenderer","t":4,"rt":$n[2].LineRenderer,"sn":"lineRenderer"},{"a":2,"n":"quality","t":4,"rt":$n[0].Int32,"sn":"quality","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"releaseImmediately","t":4,"rt":$n[0].Boolean,"sn":"releaseImmediately","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"releaseQuality","t":4,"rt":$n[0].Int32,"sn":"releaseQuality","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"ropeSpeed","t":4,"rt":$n[0].Single,"sn":"ropeSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"ropeWidth","t":4,"rt":$n[0].Single,"sn":"ropeWidth","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"spring","t":4,"rt":mvSpring,"sn":"spring"},{"a":2,"n":"strength","t":4,"rt":$n[0].Single,"sn":"strength","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"targetPosition","t":4,"rt":$n[2].Transform,"sn":"targetPosition"},{"a":1,"n":"throwTransform","t":4,"rt":$n[2].Transform,"sn":"throwTransform"},{"a":1,"n":"throwTransform1","t":4,"rt":$n[2].Transform,"sn":"throwTransform1"},{"a":2,"n":"velocity","t":4,"rt":$n[0].Single,"sn":"velocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waveCount","t":4,"rt":$n[0].Single,"sn":"waveCount","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"waveHeight","t":4,"rt":$n[0].Single,"sn":"waveHeight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*mvSpringRope end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"anim","t":4,"rt":$n[2].Animation,"sn":"anim"}]}; }, $n);
    /*PlayerController end.*/

    /*SpiderController start.*/
    $m("SpiderController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnThrowRope","t":8,"pi":[{"n":"targetL","pt":$n[2].Transform,"ps":0},{"n":"targetR","pt":$n[2].Transform,"ps":1}],"sn":"OnThrowRope","rt":$n[0].Void,"p":[$n[2].Transform,$n[2].Transform]},{"a":2,"n":"Release","t":8,"sn":"Release","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"ThrowRopeL","t":8,"sn":"ThrowRopeL","rt":$n[0].Void},{"a":2,"n":"ThrowRopeLeftAnim","t":8,"sn":"ThrowRopeLeftAnim","rt":$n[0].Void},{"a":2,"n":"ThrowRopeR","t":8,"sn":"ThrowRopeR","rt":$n[0].Void},{"a":2,"n":"ThrowRopeRightAnim","t":8,"sn":"ThrowRopeRightAnim","rt":$n[0].Void},{"a":2,"n":"handL","t":4,"rt":$n[2].Transform,"sn":"handL"},{"a":2,"n":"handR","t":4,"rt":$n[2].Transform,"sn":"handR"},{"a":2,"n":"manager","t":4,"rt":GameManagerSwing,"sn":"manager"},{"a":2,"n":"ropeL","t":4,"rt":mvSpringRope,"sn":"ropeL"},{"a":1,"n":"ropePosition","t":4,"rt":$n[2].GameObject,"sn":"ropePosition"},{"a":2,"n":"ropeR","t":4,"rt":mvSpringRope,"sn":"ropeR"},{"a":1,"n":"targetL","t":4,"rt":$n[2].Transform,"sn":"targetL"},{"a":1,"n":"targetR","t":4,"rt":$n[2].Transform,"sn":"targetR"}]}; }, $n);
    /*SpiderController end.*/

    /*SpiderFly start.*/
    $m("SpiderFly", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnAddForce","t":8,"sn":"OnAddForce","rt":$n[0].Void},{"a":2,"n":"OnEndLighting","t":8,"sn":"OnEndLighting","rt":$n[0].Void},{"a":2,"n":"OnSkillClick","t":8,"sn":"OnSkillClick","rt":$n[0].Void},{"a":2,"n":"OnStartLighting","t":8,"sn":"OnStartLighting","rt":$n[0].Void},{"a":2,"n":"OnStartMove","t":8,"sn":"OnStartMove","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"StartPunch","t":8,"sn":"StartPunch","rt":$n[3].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"animator","t":4,"rt":$n[2].Animator,"sn":"animator"},{"a":2,"n":"btFullGame","t":4,"rt":$n[2].GameObject,"sn":"btFullGame"},{"a":2,"n":"clips","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"clips"},{"a":2,"n":"controller","t":4,"rt":SpiderController,"sn":"controller"},{"a":2,"n":"effectExplosion","t":4,"rt":$n[2].ParticleSystem,"sn":"effectExplosion"},{"a":2,"n":"enemies","t":4,"rt":System.Array.type(UnityEngine.Animator),"sn":"enemies"},{"a":2,"n":"exploseSound","t":4,"rt":$n[2].AudioSource,"sn":"exploseSound"},{"a":2,"n":"gameManager","t":4,"rt":GameManagerSwing,"sn":"gameManager"},{"a":2,"n":"guideHook","t":4,"rt":$n[2].GameObject,"sn":"guideHook"},{"a":2,"n":"handEff","t":4,"rt":$n[2].ParticleSystem,"sn":"handEff"},{"a":1,"n":"isMove","t":4,"rt":$n[0].Boolean,"sn":"isMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPunch","t":4,"rt":$n[0].Boolean,"sn":"isPunch","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lightingSound","t":4,"rt":$n[2].AudioSource,"sn":"lightingSound"},{"a":2,"n":"punchPoint","t":4,"rt":$n[2].Transform,"sn":"punchPoint"},{"a":2,"n":"rid","t":4,"rt":$n[2].Rigidbody,"sn":"rid"},{"a":1,"n":"swingCount","t":4,"rt":$n[0].Int32,"sn":"swingCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"swingSound","t":4,"rt":$n[2].AudioSource,"sn":"swingSound"},{"a":1,"n":"velocity","t":4,"rt":$n[0].Single,"sn":"velocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SpiderFly end.*/

    /*SmoothShakeFree.ShakeBase start.*/
    $m("SmoothShakeFree.ShakeBase", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ab":true,"a":4,"n":"Apply","t":8,"pi":[{"n":"value","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"Apply","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3)]},{"ab":true,"a":4,"n":"ApplyPresetSettings","t":8,"pi":[{"n":"preset","pt":$n[4].SmoothShakeFreePreset,"ps":0}],"sn":"ApplyPresetSettings","rt":$n[0].Void,"p":[$n[4].SmoothShakeFreePreset]},{"v":true,"a":3,"n":"ApplySum","t":8,"sn":"ApplySum","rt":$n[0].Void},{"a":4,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":3,"n":"ClearAfterFinished","t":8,"sn":"ClearAfterFinished","rt":$n[3].IEnumerator},{"v":true,"a":3,"n":"Execute","t":8,"pi":[{"n":"shaker","pt":$n[4].Shaker,"ps":0},{"n":"timeSettings","pt":$n[4].TimeSettings,"ps":1},{"n":"i","pt":$n[0].Int32,"ps":2}],"sn":"Execute","rt":$n[0].Void,"p":[$n[4].Shaker,$n[4].TimeSettings,$n[0].Int32]},{"a":1,"n":"FadeRoutine","t":8,"pi":[{"n":"curve","pt":pc.AnimationCurve,"ps":0},{"n":"shaker","pt":$n[4].Shaker,"ps":1},{"n":"timeSettings","pt":$n[4].TimeSettings,"ps":2},{"n":"isFadingOut","pt":$n[0].Boolean,"ps":3},{"n":"i","pt":$n[0].Int32,"ps":4}],"sn":"FadeRoutine","rt":$n[3].IEnumerator,"p":[pc.AnimationCurve,$n[4].Shaker,$n[4].TimeSettings,$n[0].Boolean,$n[0].Int32]},{"a":2,"n":"ForceStop","t":8,"sn":"ForceStop","rt":$n[0].Void},{"ab":true,"a":3,"n":"GetShakers","t":8,"sn":"GetShakers","rt":System.Array.type(SmoothShakeFree.Shaker)},{"a":1,"n":"HoldRoutine","t":8,"pi":[{"n":"duration","pt":$n[0].Single,"ps":0},{"n":"shaker","pt":$n[4].Shaker,"ps":1},{"n":"timeSettings","pt":$n[4].TimeSettings,"ps":2},{"n":"i","pt":$n[0].Int32,"ps":3}],"sn":"HoldRoutine","rt":$n[3].IEnumerator,"p":[$n[0].Single,$n[4].Shaker,$n[4].TimeSettings,$n[0].Int32]},{"ab":true,"a":4,"n":"ResetDefaultValues","t":8,"sn":"ResetDefaultValues","rt":$n[0].Void},{"ab":true,"a":4,"n":"SaveDefaultValues","t":8,"sn":"SaveDefaultValues","rt":$n[0].Void},{"a":3,"n":"ShakeRoutine","t":8,"pi":[{"n":"shaker","pt":$n[4].Shaker,"ps":0},{"n":"timeSettings","pt":$n[4].TimeSettings,"ps":1},{"n":"i","pt":$n[0].Int32,"ps":2}],"sn":"ShakeRoutine","rt":$n[3].IEnumerator,"p":[$n[4].Shaker,$n[4].TimeSettings,$n[0].Int32]},{"a":4,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"v":true,"a":2,"n":"StartShake","t":8,"sn":"StartShake","rt":$n[0].Void},{"a":2,"n":"StartShake","t":8,"pi":[{"n":"preset","pt":$n[4].SmoothShakeFreePreset,"ps":0}],"sn":"StartShake$1","rt":$n[0].Void,"p":[$n[4].SmoothShakeFreePreset]},{"a":2,"n":"StopShake","t":8,"sn":"StopShake","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.HideInInspector()],"a":4,"n":"activeShakeRoutines","t":4,"rt":$n[5].List$1(UnityEngine.Coroutine),"sn":"activeShakeRoutines","ro":true},{"at":[new UnityEngine.HideInInspector()],"a":4,"n":"clearAfterFinished","t":4,"rt":$n[2].Coroutine,"sn":"clearAfterFinished"},{"at":[new UnityEngine.HideInInspector()],"a":4,"n":"shakers","t":4,"rt":System.Array.type(SmoothShakeFree.Shaker),"sn":"shakers"},{"at":[new UnityEngine.HideInInspector()],"a":4,"n":"sum","t":4,"rt":System.Array.type(UnityEngine.Vector3),"sn":"sum"},{"at":[new UnityEngine.HeaderAttribute("Time Settings"),new UnityEngine.TooltipAttribute("Settings for the shake timing")],"a":2,"n":"timeSettings","t":4,"rt":$n[4].TimeSettings,"sn":"timeSettings"},{"a":1,"n":"willStop","t":4,"rt":$n[0].Boolean,"sn":"willStop","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*SmoothShakeFree.ShakeBase end.*/

    /*SmoothShakeFree.Shaker start.*/
    $m("SmoothShakeFree.Shaker", function () { return {"nested":[$n[4].Shaker.NoiseType],"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Evaluate","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"Evaluate","rt":$n[2].Vector3,"p":[$n[0].Single]},{"a":3,"n":"EvaluateBase","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0},{"n":"amplitude","pt":$n[0].Single,"ps":1},{"n":"frequency","pt":$n[0].Single,"ps":2}],"sn":"EvaluateBase","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"EvaluateSinewave","t":8,"pi":[{"n":"t","pt":$n[0].Single,"ps":0}],"sn":"EvaluateSinewave","rt":$n[0].Single,"p":[$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"EvaluateWhiteNoise","t":8,"sn":"EvaluateWhiteNoise","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("The amplitude (strength) of this shaker")],"a":2,"n":"amplitude","t":4,"rt":$n[2].Vector3,"sn":"amplitude"},{"at":[new UnityEngine.TooltipAttribute("The frequency (speed) of this shaker")],"a":2,"n":"frequency","t":4,"rt":$n[2].Vector3,"sn":"frequency"},{"at":[new UnityEngine.TooltipAttribute("The type of shake to use")],"a":2,"n":"noiseType","t":4,"rt":$n[4].Shaker.NoiseType,"sn":"noiseType","box":function ($v) { return Bridge.box($v, SmoothShakeFree.Shaker.NoiseType, System.Enum.toStringFn(SmoothShakeFree.Shaker.NoiseType));}}]}; }, $n);
    /*SmoothShakeFree.Shaker end.*/

    /*SmoothShakeFree.Shaker+NoiseType start.*/
    $m("SmoothShakeFree.Shaker.NoiseType", function () { return {"td":$n[4].Shaker,"att":258,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SineWave","is":true,"t":4,"rt":$n[4].Shaker.NoiseType,"sn":"SineWave","box":function ($v) { return Bridge.box($v, SmoothShakeFree.Shaker.NoiseType, System.Enum.toStringFn(SmoothShakeFree.Shaker.NoiseType));}},{"a":2,"n":"WhiteNoise","is":true,"t":4,"rt":$n[4].Shaker.NoiseType,"sn":"WhiteNoise","box":function ($v) { return Bridge.box($v, SmoothShakeFree.Shaker.NoiseType, System.Enum.toStringFn(SmoothShakeFree.Shaker.NoiseType));}}]}; }, $n);
    /*SmoothShakeFree.Shaker+NoiseType end.*/

    /*SmoothShakeFree.SmoothShake start.*/
    $m("SmoothShakeFree.SmoothShake", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.AddComponentMenu.ctor("Smooth Shake Free/Smooth Shake Free")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":4,"sl":true,"n":"Apply","t":8,"pi":[{"n":"value","pt":System.Array.type(UnityEngine.Vector3),"ps":0}],"sn":"Apply","rt":$n[0].Void,"p":[System.Array.type(UnityEngine.Vector3)]},{"ov":true,"a":4,"sl":true,"n":"ApplyPresetSettings","t":8,"pi":[{"n":"preset","pt":$n[4].SmoothShakeFreePreset,"ps":0}],"sn":"ApplyPresetSettings","rt":$n[0].Void,"p":[$n[4].SmoothShakeFreePreset]},{"ov":true,"a":3,"n":"GetShakers","t":8,"sn":"GetShakers","rt":System.Array.type(SmoothShakeFree.Shaker)},{"ov":true,"a":4,"n":"ResetDefaultValues","t":8,"sn":"ResetDefaultValues","rt":$n[0].Void},{"ov":true,"a":4,"sl":true,"n":"SaveDefaultValues","t":8,"sn":"SaveDefaultValues","rt":$n[0].Void},{"at":[new UnityEngine.HeaderAttribute("Position Shake Settings"),new UnityEngine.TooltipAttribute("Settings for Position Shake")],"a":2,"n":"positionShake","t":4,"rt":$n[4].Shaker,"sn":"positionShake"},{"at":[new UnityEngine.TooltipAttribute("Preset to use for this Smooth Shake")],"a":2,"n":"preset","t":4,"rt":$n[4].SmoothShakeFreePreset,"sn":"preset"},{"at":[new UnityEngine.HeaderAttribute("Rotation Shake Settings"),new UnityEngine.TooltipAttribute("Settings for Rotation Shake")],"a":2,"n":"rotationShake","t":4,"rt":$n[4].Shaker,"sn":"rotationShake"},{"at":[new UnityEngine.HideInInspector()],"a":4,"n":"startPosition","t":4,"rt":$n[2].Vector3,"sn":"startPosition"},{"at":[new UnityEngine.HideInInspector()],"a":4,"n":"startRotation","t":4,"rt":$n[2].Vector3,"sn":"startRotation"}]}; }, $n);
    /*SmoothShakeFree.SmoothShake end.*/

    /*SmoothShakeFree.SmoothShakeFreePreset start.*/
    $m("SmoothShakeFree.SmoothShakeFreePreset", function () { return {"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "SmoothShakePreset", menuName: "Smooth Shake Free/Smooth Shake Preset", order: 1
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"at":[new UnityEngine.HeaderAttribute("Position Shake Settings"),new UnityEngine.TooltipAttribute("Settings for Position Shake")],"a":2,"n":"positionShake","t":4,"rt":$n[4].Shaker,"sn":"positionShake"},{"at":[new UnityEngine.HeaderAttribute("Rotation Shake Settings"),new UnityEngine.TooltipAttribute("Settings for Rotation Shake")],"a":2,"n":"rotationShake","t":4,"rt":$n[4].Shaker,"sn":"rotationShake"},{"at":[new UnityEngine.HeaderAttribute("Time Settings"),new UnityEngine.TooltipAttribute("Settings for the shake timing")],"a":2,"n":"timeSettings","t":4,"rt":$n[4].TimeSettings,"sn":"timeSettings"}]}; }, $n);
    /*SmoothShakeFree.SmoothShakeFreePreset end.*/

    /*SmoothShakeFree.TimeSettings start.*/
    $m("SmoothShakeFree.TimeSettings", function () { return {"att":1057033,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"GetShakeDuration","t":8,"sn":"GetShakeDuration","rt":$n[0].Single,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("Use an infinite holdduration (until stopped)")],"a":2,"n":"constantShake","t":4,"rt":$n[0].Boolean,"sn":"constantShake","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("Play this shake on start")],"a":2,"n":"enableOnStart","t":4,"rt":$n[0].Boolean,"sn":"enableOnStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.TooltipAttribute("The curve to use for the shake fade in")],"a":2,"n":"fadeInCurve","t":4,"rt":pc.AnimationCurve,"sn":"fadeInCurve"},{"at":[new UnityEngine.TooltipAttribute("How long the shake fade in should last")],"a":2,"n":"fadeInDuration","t":4,"rt":$n[0].Single,"sn":"fadeInDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("The curve to use for the shake fade out")],"a":2,"n":"fadeOutCurve","t":4,"rt":pc.AnimationCurve,"sn":"fadeOutCurve"},{"at":[new UnityEngine.TooltipAttribute("How long the shake fade out should last")],"a":2,"n":"fadeOutDuration","t":4,"rt":$n[0].Single,"sn":"fadeOutDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.HideInInspector()],"a":2,"n":"fadeValue","t":4,"rt":$n[0].Single,"sn":"fadeValue","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.TooltipAttribute("How long the shake should hold at full strength")],"a":2,"n":"holdDuration","t":4,"rt":$n[0].Single,"sn":"holdDuration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SmoothShakeFree.TimeSettings end.*/

    /*SmoothShakeFree.Utility start.*/
    $m("SmoothShakeFree.Utility", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Remap","is":true,"t":8,"pi":[{"n":"valueInput","pt":$n[0].Single,"ps":0},{"n":"oldRangeMin","pt":$n[0].Single,"ps":1},{"n":"oldRangeMax","pt":$n[0].Single,"ps":2},{"n":"newRangeMin","pt":$n[0].Single,"ps":3},{"n":"newRangeMax","pt":$n[0].Single,"ps":4}],"sn":"Remap","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SmoothShakeFree.Utility end.*/

    }});
