if ( TRACE ) { TRACE( JSON.parse( '["ButtonHook#init","ButtonHook#Start","ButtonHook#OnClick","ButtonHook#Update","ButtonStopCar#init","ButtonStopCar#Start","ButtonStopCar#OnClick","ButtonStopCar#OnDown","ButtonStopCar#OnUp","ButtonStopCar#Update","CameraFollow#Start","CameraFollow#LateUpdate","CrimeBus#init","CrimeBus#SetPlayer","CrimeBus#Start","CrimeBus#OnPlayerKick","CrimeBus#StartKick","CrimeBus#Update","CrimeBus#CrashDoor","CrimeBus#Stop","GameManager#Start","GameManager#Jump","GameManager#Kick","GameManager#StartGame","GameManager#OnPlayNowClick","GameManager#OnButtonClick","GameManager#PauseGameplay","GameManager#ResumeGameplay","GameManagerSwing#init","GameManagerSwing#Start","GameManagerSwing#OnHoldDown","GameManagerSwing#OnHoldUp","GameManagerSwing#OnSwingClick","GameManagerSwing#ChangePlayerCam1","GameManagerSwing#FullGameClick","GameManagerSwing#Update","LookAtPlayer#init","LookAtPlayer#Start","LookAtPlayer#Update","MoveController#init","MoveController#Start","MoveController#OnStartFollow","MoveController#OnStartLanding","MoveController#StartKick","MoveController#OnEndMove","MoveController#Update","mvSpring#Value#get","mvSpring#Update","mvSpring#Reset","mvSpring#SetValue","mvSpring#SetTarget","mvSpring#SetDamper","mvSpring#SetStrength","mvSpring#SetVelocity","mvSpringRope#init","mvSpringRope#Start","mvSpringRope#SetThrowTransform","mvSpringRope#SetThrowTransform$1","mvSpringRope#Throw","mvSpringRope#Release","mvSpringRope#LateUpdate","mvSpringRope#UpdateSpringRope","PlayerController#Start","PlayerController#Update","SpiderController#Start","SpiderController#OnThrowRope","SpiderController#ThrowRopeL","SpiderController#ThrowRopeR","SpiderController#Release","SpiderController#ThrowRopeLeftAnim","SpiderController#ThrowRopeRightAnim","SpiderFly#init","SpiderFly#OnAddForce","SpiderFly#OnTriggerEnter","SpiderFly#OnSkillClick","SpiderFly#StartPunch","SpiderFly#OnStartLighting","SpiderFly#OnEndLighting","SpiderFly#OnStartMove","SpiderFly#Update"]' ) ); }
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
            hookSound: null,
            wind: null,
            trailL: null,
            trailR: null,
            isHold: false,
            holdTime: 0,
            fallIndex: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManagerSwing#init", this ); }

                this.isHold = false;
                this.fallIndex = System.Array.init([0.0, 0.6], System.Single);
            }
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

                this.playerAnim.SetBool$1("hold_rope", true);
                this.player.OnThrowRope(this.targetL, this.targetR);
                this.isHold = true;
                this.holdTime = 0.0;
            },
            /*GameManagerSwing.OnHoldDown end.*/

            /*GameManagerSwing.OnHoldUp start.*/
            OnHoldUp: function () {
if ( TRACE ) { TRACE( "GameManagerSwing#OnHoldUp", this ); }

                this.playerAnim.SetBool$1("hold_rope", false);
                this.isHold = false;
                this.player.Release();
                if (this.holdTime > 1.0) {
                    var forceDirection = this.player.transform.forward.$clone().clone().scale( 2.0 ).add( pc.Vec3.UP.clone() );
                    this.playerAnim.Play$2("swing1");
                    this.playerRid.velocity = pc.Vec3.ZERO.clone();
                    this.playerRid.AddForce$1(forceDirection.$clone().clone().scale( 50000.0 ), UnityEngine.ForceMode.Force);
                    this.btSwing.SetActive(true);
                    this.btStart.SetActive(false);
                    this.cameraFollow.positionPoint = this.playerCam;
                    this.cameraFollow.lookAtPoint = this.playerPelvis;
                    this.hookSound.Play();
                    if (UnityEngine.GameObject.op_Inequality(this.wind, null)) {
                        this.wind.SetActive(true);
                        this.trailL.SetActive(true);
                        this.trailR.SetActive(true);
                    }
                }
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
                if (UnityEngine.GameObject.op_Inequality(this.wind, null)) {
                    this.trailL.SetActive(false);
                    this.trailR.SetActive(false);
                }
                this.playerAnim.SetFloat$1("fall", 0.6);
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

                if (this.isHold) {
                    this.holdTime += UnityEngine.Time.deltaTime;
                }
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
            trailL: null,
            trailR: null,
            swingSound: null,
            isPunch: false,
            lightingSound: null,
            exploseSound: null,
            popupSpawn: null,
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
                var vector = new pc.Quat().setFromAxisAngle( pc.Vec3.UP.clone(), UnityEngine.Random.Range$1(-5.0, 5.0) ).transformVector( this.transform.forward ).clone().scale( 1.5 );
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
                this.trailL.SetActive(true);
                this.trailR.SetActive(true);
            },
            /*SpiderFly.OnAddForce end.*/

            /*SpiderFly.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "SpiderFly#OnTriggerEnter", this ); }

                if (Bridge.referenceEquals(other.gameObject.tag, "jump") && this.rid.velocity.y < 0.0 && this.animator.GetCurrentAnimatorStateInfo(0).IsName("fall1")) {
                    UnityEngine.Time.timeScale = 0.0;
                    this.guideHook.SetActive(true);
                }
                if (Bridge.referenceEquals(other.gameObject.tag, "punch") && !this.isPunch) {
                    this.rid.velocity = pc.Vec3.ZERO.clone();
                    this.rid.isKinematic = true;
                    UnityEngine.Time.timeScale = 0.0;
                    if (UnityEngine.GameObject.op_Inequality(this.popupSpawn, null)) {
                        this.popupSpawn.SetActive(true);
                        this.gameManager.btSwing.SetActive(false);
                        Luna.Unity.LifeCycle.GameEnded();
                    } else {
                        this.gameManager.btSwing.SetActive(false);
                        this.gameManager.btSkill.SetActive(true);
                    }
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

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine.UI","UnityEngine","System.Collections"];

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
    $m("GameManagerSwing", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ChangePlayerCam1","t":8,"sn":"ChangePlayerCam1","rt":$n[0].Void},{"a":2,"n":"FullGameClick","t":8,"sn":"FullGameClick","rt":$n[0].Void},{"a":2,"n":"OnHoldDown","t":8,"sn":"OnHoldDown","rt":$n[0].Void},{"a":2,"n":"OnHoldUp","t":8,"sn":"OnHoldUp","rt":$n[0].Void},{"a":2,"n":"OnSwingClick","t":8,"sn":"OnSwingClick","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"btSkill","t":4,"rt":$n[2].GameObject,"sn":"btSkill"},{"a":2,"n":"btStart","t":4,"rt":$n[2].GameObject,"sn":"btStart"},{"a":2,"n":"btSwing","t":4,"rt":$n[2].GameObject,"sn":"btSwing"},{"a":2,"n":"cameraFollow","t":4,"rt":CameraFollow,"sn":"cameraFollow"},{"a":1,"n":"fallIndex","t":4,"rt":$n[0].Array.type(System.Single),"sn":"fallIndex"},{"a":1,"n":"holdTime","t":4,"rt":$n[0].Single,"sn":"holdTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"hookSound","t":4,"rt":$n[2].AudioSource,"sn":"hookSound"},{"a":1,"n":"isHold","t":4,"rt":$n[0].Boolean,"sn":"isHold","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"player","t":4,"rt":SpiderController,"sn":"player"},{"a":2,"n":"playerAnim","t":4,"rt":$n[2].Animator,"sn":"playerAnim"},{"a":2,"n":"playerCam","t":4,"rt":$n[2].Transform,"sn":"playerCam"},{"a":2,"n":"playerCam1","t":4,"rt":$n[2].Transform,"sn":"playerCam1"},{"a":2,"n":"playerPelvis","t":4,"rt":$n[2].Transform,"sn":"playerPelvis"},{"a":2,"n":"playerRid","t":4,"rt":$n[2].Rigidbody,"sn":"playerRid"},{"a":2,"n":"targetL","t":4,"rt":$n[2].Transform,"sn":"targetL"},{"a":2,"n":"targetR","t":4,"rt":$n[2].Transform,"sn":"targetR"},{"a":2,"n":"trailL","t":4,"rt":$n[2].GameObject,"sn":"trailL"},{"a":2,"n":"trailR","t":4,"rt":$n[2].GameObject,"sn":"trailR"},{"a":2,"n":"wind","t":4,"rt":$n[2].GameObject,"sn":"wind"}]}; }, $n);
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
    $m("SpiderFly", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnAddForce","t":8,"sn":"OnAddForce","rt":$n[0].Void},{"a":2,"n":"OnEndLighting","t":8,"sn":"OnEndLighting","rt":$n[0].Void},{"a":2,"n":"OnSkillClick","t":8,"sn":"OnSkillClick","rt":$n[0].Void},{"a":2,"n":"OnStartLighting","t":8,"sn":"OnStartLighting","rt":$n[0].Void},{"a":2,"n":"OnStartMove","t":8,"sn":"OnStartMove","rt":$n[0].Void},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[2].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[2].Collider]},{"a":1,"n":"StartPunch","t":8,"sn":"StartPunch","rt":$n[3].IEnumerator},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"animator","t":4,"rt":$n[2].Animator,"sn":"animator"},{"a":2,"n":"btFullGame","t":4,"rt":$n[2].GameObject,"sn":"btFullGame"},{"a":2,"n":"clips","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"clips"},{"a":2,"n":"controller","t":4,"rt":SpiderController,"sn":"controller"},{"a":2,"n":"effectExplosion","t":4,"rt":$n[2].ParticleSystem,"sn":"effectExplosion"},{"a":2,"n":"enemies","t":4,"rt":System.Array.type(UnityEngine.Animator),"sn":"enemies"},{"a":2,"n":"exploseSound","t":4,"rt":$n[2].AudioSource,"sn":"exploseSound"},{"a":2,"n":"gameManager","t":4,"rt":GameManagerSwing,"sn":"gameManager"},{"a":2,"n":"guideHook","t":4,"rt":$n[2].GameObject,"sn":"guideHook"},{"a":2,"n":"handEff","t":4,"rt":$n[2].ParticleSystem,"sn":"handEff"},{"a":1,"n":"isMove","t":4,"rt":$n[0].Boolean,"sn":"isMove","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isPunch","t":4,"rt":$n[0].Boolean,"sn":"isPunch","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"lightingSound","t":4,"rt":$n[2].AudioSource,"sn":"lightingSound"},{"a":2,"n":"popupSpawn","t":4,"rt":$n[2].GameObject,"sn":"popupSpawn"},{"a":2,"n":"punchPoint","t":4,"rt":$n[2].Transform,"sn":"punchPoint"},{"a":2,"n":"rid","t":4,"rt":$n[2].Rigidbody,"sn":"rid"},{"a":1,"n":"swingCount","t":4,"rt":$n[0].Int32,"sn":"swingCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"swingSound","t":4,"rt":$n[2].AudioSource,"sn":"swingSound"},{"a":2,"n":"trailL","t":4,"rt":$n[2].GameObject,"sn":"trailL"},{"a":2,"n":"trailR","t":4,"rt":$n[2].GameObject,"sn":"trailR"},{"a":1,"n":"velocity","t":4,"rt":$n[0].Single,"sn":"velocity","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*SpiderFly end.*/

    }});
