var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointSpring' )
  var i523 = data
  i522.spring = i523[0]
  i522.damper = i523[1]
  i522.targetPosition = i523[2]
  return i522
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointMotor' )
  var i525 = data
  i524.m_TargetVelocity = i525[0]
  i524.m_Force = i525[1]
  i524.m_FreeSpin = i525[2]
  return i524
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointLimits' )
  var i527 = data
  i526.m_Min = i527[0]
  i526.m_Max = i527[1]
  i526.m_Bounciness = i527[2]
  i526.m_BounceMinVelocity = i527[3]
  i526.m_ContactDistance = i527[4]
  i526.minBounce = i527[5]
  i526.maxBounce = i527[6]
  return i526
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointDrive' )
  var i529 = data
  i528.m_PositionSpring = i529[0]
  i528.m_PositionDamper = i529[1]
  i528.m_MaximumForce = i529[2]
  i528.m_UseAcceleration = i529[3]
  return i528
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i531 = data
  i530.m_Spring = i531[0]
  i530.m_Damper = i531[1]
  return i530
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i533 = data
  i532.m_Limit = i533[0]
  i532.m_Bounciness = i533[1]
  i532.m_ContactDistance = i533[2]
  return i532
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i535 = data
  i534.m_ExtremumSlip = i535[0]
  i534.m_ExtremumValue = i535[1]
  i534.m_AsymptoteSlip = i535[2]
  i534.m_AsymptoteValue = i535[3]
  i534.m_Stiffness = i535[4]
  return i534
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i537 = data
  i536.m_LowerAngle = i537[0]
  i536.m_UpperAngle = i537[1]
  return i536
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i539 = data
  i538.m_MotorSpeed = i539[0]
  i538.m_MaximumMotorTorque = i539[1]
  return i538
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i541 = data
  i540.m_DampingRatio = i541[0]
  i540.m_Frequency = i541[1]
  i540.m_Angle = i541[2]
  return i540
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i543 = data
  i542.m_LowerTranslation = i543[0]
  i542.m_UpperTranslation = i543[1]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i545 = data
  i544.position = new pc.Vec3( i545[0], i545[1], i545[2] )
  i544.scale = new pc.Vec3( i545[3], i545[4], i545[5] )
  i544.rotation = new pc.Quat(i545[6], i545[7], i545[8], i545[9])
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'sharedMesh')
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i549 = data
  request.r(i549[0], i549[1], 0, i548, 'additionalVertexStreams')
  i548.enabled = !!i549[2]
  request.r(i549[3], i549[4], 0, i548, 'sharedMaterial')
  var i551 = i549[5]
  var i550 = []
  for(var i = 0; i < i551.length; i += 2) {
  request.r(i551[i + 0], i551[i + 1], 2, i550, '')
  }
  i548.sharedMaterials = i550
  i548.receiveShadows = !!i549[6]
  i548.shadowCastingMode = i549[7]
  i548.sortingLayerID = i549[8]
  i548.sortingOrder = i549[9]
  i548.lightmapIndex = i549[10]
  i548.lightmapSceneIndex = i549[11]
  i548.lightmapScaleOffset = new pc.Vec4( i549[12], i549[13], i549[14], i549[15] )
  i548.lightProbeUsage = i549[16]
  i548.reflectionProbeUsage = i549[17]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i555 = data
  i554.name = i555[0]
  i554.tagId = i555[1]
  i554.enabled = !!i555[2]
  i554.isStatic = !!i555[3]
  i554.layer = i555[4]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i557 = data
  i556.enabled = !!i557[0]
  i556.isTrigger = !!i557[1]
  request.r(i557[2], i557[3], 0, i556, 'material')
  request.r(i557[4], i557[5], 0, i556, 'sharedMesh')
  i556.convex = !!i557[6]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i559 = data
  i558.name = i559[0]
  i558.halfPrecision = !!i559[1]
  i558.useUInt32IndexFormat = !!i559[2]
  i558.vertexCount = i559[3]
  i558.aabb = i559[4]
  var i561 = i559[5]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( !!i561[i + 0] );
  }
  i558.streams = i560
  i558.vertices = i559[6]
  var i563 = i559[7]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i563[i + 0]) );
  }
  i558.subMeshes = i562
  var i565 = i559[8]
  var i564 = []
  for(var i = 0; i < i565.length; i += 16) {
    i564.push( new pc.Mat4().setData(i565[i + 0], i565[i + 1], i565[i + 2], i565[i + 3],  i565[i + 4], i565[i + 5], i565[i + 6], i565[i + 7],  i565[i + 8], i565[i + 9], i565[i + 10], i565[i + 11],  i565[i + 12], i565[i + 13], i565[i + 14], i565[i + 15]) );
  }
  i558.bindposes = i564
  var i567 = i559[9]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i567[i + 0]) );
  }
  i558.blendShapes = i566
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i573 = data
  i572.triangles = i573[0]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i579 = data
  i578.name = i579[0]
  var i581 = i579[1]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i581[i + 0]) );
  }
  i578.frames = i580
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i582 = root || new pc.UnityMaterial()
  var i583 = data
  i582.name = i583[0]
  request.r(i583[1], i583[2], 0, i582, 'shader')
  i582.renderQueue = i583[3]
  i582.enableInstancing = !!i583[4]
  var i585 = i583[5]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i585[i + 0]) );
  }
  i582.floatParameters = i584
  var i587 = i583[6]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i587[i + 0]) );
  }
  i582.colorParameters = i586
  var i589 = i583[7]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i589[i + 0]) );
  }
  i582.vectorParameters = i588
  var i591 = i583[8]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i591[i + 0]) );
  }
  i582.textureParameters = i590
  var i593 = i583[9]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i593[i + 0]) );
  }
  i582.materialFlags = i592
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i597 = data
  i596.name = i597[0]
  i596.value = i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i601 = data
  i600.name = i601[0]
  i600.value = new pc.Color(i601[1], i601[2], i601[3], i601[4])
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i605 = data
  i604.name = i605[0]
  i604.value = new pc.Vec4( i605[1], i605[2], i605[3], i605[4] )
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i609 = data
  i608.name = i609[0]
  request.r(i609[1], i609[2], 0, i608, 'value')
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i613 = data
  i612.name = i613[0]
  i612.enabled = !!i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i615 = data
  i614.name = i615[0]
  i614.width = i615[1]
  i614.height = i615[2]
  i614.mipmapCount = i615[3]
  i614.anisoLevel = i615[4]
  i614.filterMode = i615[5]
  i614.hdr = !!i615[6]
  i614.format = i615[7]
  i614.wrapMode = i615[8]
  i614.alphaIsTransparency = !!i615[9]
  i614.alphaSource = i615[10]
  i614.graphicsFormat = i615[11]
  i614.sRGBTexture = !!i615[12]
  i614.desiredColorSpace = i615[13]
  i614.wrapU = i615[14]
  i614.wrapV = i615[15]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i617 = data
  i616.center = new pc.Vec3( i617[0], i617[1], i617[2] )
  i616.size = new pc.Vec3( i617[3], i617[4], i617[5] )
  i616.enabled = !!i617[6]
  i616.isTrigger = !!i617[7]
  request.r(i617[8], i617[9], 0, i616, 'material')
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i619 = data
  request.r(i619[0], i619[1], 0, i618, 'animatorController')
  request.r(i619[2], i619[3], 0, i618, 'avatar')
  i618.updateMode = i619[4]
  i618.hasTransformHierarchy = !!i619[5]
  i618.applyRootMotion = !!i619[6]
  var i621 = i619[7]
  var i620 = []
  for(var i = 0; i < i621.length; i += 2) {
  request.r(i621[i + 0], i621[i + 1], 2, i620, '')
  }
  i618.humanBones = i620
  i618.enabled = !!i619[8]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i625 = data
  i624.enabled = !!i625[0]
  request.r(i625[1], i625[2], 0, i624, 'sharedMaterial')
  var i627 = i625[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.sharedMaterials = i626
  i624.receiveShadows = !!i625[4]
  i624.shadowCastingMode = i625[5]
  i624.sortingLayerID = i625[6]
  i624.sortingOrder = i625[7]
  i624.lightmapIndex = i625[8]
  i624.lightmapSceneIndex = i625[9]
  i624.lightmapScaleOffset = new pc.Vec4( i625[10], i625[11], i625[12], i625[13] )
  i624.lightProbeUsage = i625[14]
  i624.reflectionProbeUsage = i625[15]
  request.r(i625[16], i625[17], 0, i624, 'sharedMesh')
  var i629 = i625[18]
  var i628 = []
  for(var i = 0; i < i629.length; i += 2) {
  request.r(i629[i + 0], i629[i + 1], 2, i628, '')
  }
  i624.bones = i628
  i624.updateWhenOffscreen = !!i625[19]
  i624.localBounds = i625[20]
  request.r(i625[21], i625[22], 0, i624, 'rootBone')
  var i631 = i625[23]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i631[i + 0]) );
  }
  i624.blendShapesWeights = i630
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i635 = data
  i634.weight = i635[0]
  return i634
}

Deserializers["SpiderController"] = function (request, data, root) {
  var i636 = root || request.c( 'SpiderController' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'ropeL')
  request.r(i637[2], i637[3], 0, i636, 'ropeR')
  request.r(i637[4], i637[5], 0, i636, 'handL')
  request.r(i637[6], i637[7], 0, i636, 'handR')
  request.r(i637[8], i637[9], 0, i636, 'manager')
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i639 = data
  i638.mass = i639[0]
  i638.drag = i639[1]
  i638.angularDrag = i639[2]
  i638.useGravity = !!i639[3]
  i638.isKinematic = !!i639[4]
  i638.constraints = i639[5]
  i638.maxAngularVelocity = i639[6]
  i638.collisionDetectionMode = i639[7]
  i638.interpolation = i639[8]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i641 = data
  i640.center = new pc.Vec3( i641[0], i641[1], i641[2] )
  i640.radius = i641[3]
  i640.height = i641[4]
  i640.direction = i641[5]
  i640.enabled = !!i641[6]
  i640.isTrigger = !!i641[7]
  request.r(i641[8], i641[9], 0, i640, 'material')
  return i640
}

Deserializers["SpiderFly"] = function (request, data, root) {
  var i642 = root || request.c( 'SpiderFly' )
  var i643 = data
  request.r(i643[0], i643[1], 0, i642, 'rid')
  request.r(i643[2], i643[3], 0, i642, 'controller')
  request.r(i643[4], i643[5], 0, i642, 'animator')
  request.r(i643[6], i643[7], 0, i642, 'punchPoint')
  request.r(i643[8], i643[9], 0, i642, 'gameManager')
  request.r(i643[10], i643[11], 0, i642, 'handEff')
  request.r(i643[12], i643[13], 0, i642, 'effectExplosion')
  var i645 = i643[14]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i642.enemies = i644
  request.r(i643[15], i643[16], 0, i642, 'btFullGame')
  request.r(i643[17], i643[18], 0, i642, 'guideHook')
  var i647 = i643[19]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i642.clips = i646
  request.r(i643[20], i643[21], 0, i642, 'swingSound')
  request.r(i643[22], i643[23], 0, i642, 'lightingSound')
  request.r(i643[24], i643[25], 0, i642, 'exploseSound')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'clip')
  request.r(i653[2], i653[3], 0, i652, 'outputAudioMixerGroup')
  i652.playOnAwake = !!i653[4]
  i652.loop = !!i653[5]
  i652.time = i653[6]
  i652.volume = i653[7]
  i652.pitch = i653[8]
  i652.enabled = !!i653[9]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i655 = data
  i654.enabled = !!i655[0]
  request.r(i655[1], i655[2], 0, i654, 'sharedMaterial')
  var i657 = i655[3]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.sharedMaterials = i656
  i654.receiveShadows = !!i655[4]
  i654.shadowCastingMode = i655[5]
  i654.sortingLayerID = i655[6]
  i654.sortingOrder = i655[7]
  i654.lightmapIndex = i655[8]
  i654.lightmapSceneIndex = i655[9]
  i654.lightmapScaleOffset = new pc.Vec4( i655[10], i655[11], i655[12], i655[13] )
  i654.lightProbeUsage = i655[14]
  i654.reflectionProbeUsage = i655[15]
  request.r(i655[16], i655[17], 0, i654, 'mesh')
  i654.meshCount = i655[18]
  i654.activeVertexStreamsCount = i655[19]
  i654.alignment = i655[20]
  i654.renderMode = i655[21]
  i654.sortMode = i655[22]
  i654.lengthScale = i655[23]
  i654.velocityScale = i655[24]
  i654.cameraVelocityScale = i655[25]
  i654.normalDirection = i655[26]
  i654.sortingFudge = i655[27]
  i654.minParticleSize = i655[28]
  i654.maxParticleSize = i655[29]
  i654.pivot = new pc.Vec3( i655[30], i655[31], i655[32] )
  request.r(i655[33], i655[34], 0, i654, 'trailMaterial')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i659 = data
  i658.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i659[0], i658.main)
  i658.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i659[1], i658.colorBySpeed)
  i658.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i659[2], i658.colorOverLifetime)
  i658.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i659[3], i658.emission)
  i658.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i659[4], i658.rotationBySpeed)
  i658.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i659[5], i658.rotationOverLifetime)
  i658.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i659[6], i658.shape)
  i658.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i659[7], i658.sizeBySpeed)
  i658.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i659[8], i658.sizeOverLifetime)
  i658.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i659[9], i658.textureSheetAnimation)
  i658.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i659[10], i658.velocityOverLifetime)
  i658.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i659[11], i658.noise)
  i658.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i659[12], i658.inheritVelocity)
  i658.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i659[13], i658.forceOverLifetime)
  i658.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i659[14], i658.limitVelocityOverLifetime)
  i658.useAutoRandomSeed = !!i659[15]
  i658.randomSeed = i659[16]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemMain()
  var i661 = data
  i660.duration = i661[0]
  i660.loop = !!i661[1]
  i660.prewarm = !!i661[2]
  i660.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.startDelay)
  i660.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[4], i660.startLifetime)
  i660.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[5], i660.startSpeed)
  i660.startSize3D = !!i661[6]
  i660.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[7], i660.startSizeX)
  i660.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[8], i660.startSizeY)
  i660.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[9], i660.startSizeZ)
  i660.startRotation3D = !!i661[10]
  i660.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[11], i660.startRotationX)
  i660.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[12], i660.startRotationY)
  i660.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[13], i660.startRotationZ)
  i660.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i661[14], i660.startColor)
  i660.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[15], i660.gravityModifier)
  i660.simulationSpace = i661[16]
  request.r(i661[17], i661[18], 0, i660, 'customSimulationSpace')
  i660.simulationSpeed = i661[19]
  i660.useUnscaledTime = !!i661[20]
  i660.scalingMode = i661[21]
  i660.playOnAwake = !!i661[22]
  i660.maxParticles = i661[23]
  i660.emitterVelocityMode = i661[24]
  i660.stopAction = i661[25]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i662 = root || new pc.MinMaxCurve()
  var i663 = data
  i662.mode = i663[0]
  i662.curveMin = new pc.AnimationCurve( { keys_flow: i663[1] } )
  i662.curveMax = new pc.AnimationCurve( { keys_flow: i663[2] } )
  i662.curveMultiplier = i663[3]
  i662.constantMin = i663[4]
  i662.constantMax = i663[5]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i664 = root || new pc.MinMaxGradient()
  var i665 = data
  i664.mode = i665[0]
  i664.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i665[1], i664.gradientMin)
  i664.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i665[2], i664.gradientMax)
  i664.colorMin = new pc.Color(i665[3], i665[4], i665[5], i665[6])
  i664.colorMax = new pc.Color(i665[7], i665[8], i665[9], i665[10])
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i667 = data
  i666.mode = i667[0]
  var i669 = i667[1]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i669[i + 0]) );
  }
  i666.colorKeys = i668
  var i671 = i667[2]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i671[i + 0]) );
  }
  i666.alphaKeys = i670
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemColorBySpeed()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i673[1], i672.color)
  i672.range = new pc.Vec2( i673[2], i673[3] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i677 = data
  i676.color = new pc.Color(i677[0], i677[1], i677[2], i677[3])
  i676.time = i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i681 = data
  i680.alpha = i681[0]
  i680.time = i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemColorOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i683[1], i682.color)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemEmitter()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.rateOverTime)
  i684.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.rateOverDistance)
  var i687 = i685[3]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i687[i + 0]) );
  }
  i684.bursts = i686
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemBurst()
  var i691 = data
  i690.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[0], i690.count)
  i690.cycleCount = i691[1]
  i690.minCount = i691[2]
  i690.maxCount = i691[3]
  i690.repeatInterval = i691[4]
  i690.time = i691[5]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemRotationBySpeed()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.separateAxes = !!i693[4]
  i692.range = new pc.Vec2( i693[5], i693[6] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemRotationOverLifetime()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.x)
  i694.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.y)
  i694.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.z)
  i694.separateAxes = !!i695[4]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemShape()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.shapeType = i697[1]
  i696.randomDirectionAmount = i697[2]
  i696.sphericalDirectionAmount = i697[3]
  i696.randomPositionAmount = i697[4]
  i696.alignToDirection = !!i697[5]
  i696.radius = i697[6]
  i696.radiusMode = i697[7]
  i696.radiusSpread = i697[8]
  i696.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[9], i696.radiusSpeed)
  i696.radiusThickness = i697[10]
  i696.angle = i697[11]
  i696.length = i697[12]
  i696.boxThickness = new pc.Vec3( i697[13], i697[14], i697[15] )
  i696.meshShapeType = i697[16]
  request.r(i697[17], i697[18], 0, i696, 'mesh')
  request.r(i697[19], i697[20], 0, i696, 'meshRenderer')
  request.r(i697[21], i697[22], 0, i696, 'skinnedMeshRenderer')
  i696.useMeshMaterialIndex = !!i697[23]
  i696.meshMaterialIndex = i697[24]
  i696.useMeshColors = !!i697[25]
  i696.normalOffset = i697[26]
  i696.arc = i697[27]
  i696.arcMode = i697[28]
  i696.arcSpread = i697[29]
  i696.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[30], i696.arcSpeed)
  i696.donutRadius = i697[31]
  i696.position = new pc.Vec3( i697[32], i697[33], i697[34] )
  i696.rotation = new pc.Vec3( i697[35], i697[36], i697[37] )
  i696.scale = new pc.Vec3( i697[38], i697[39], i697[40] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemSizeBySpeed()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.x)
  i698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.y)
  i698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.z)
  i698.separateAxes = !!i699[4]
  i698.range = new pc.Vec2( i699[5], i699[6] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemSizeOverLifetime()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[1], i700.x)
  i700.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[2], i700.y)
  i700.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[3], i700.z)
  i700.separateAxes = !!i701[4]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.mode = i703[1]
  i702.animation = i703[2]
  i702.numTilesX = i703[3]
  i702.numTilesY = i703[4]
  i702.useRandomRow = !!i703[5]
  i702.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[6], i702.frameOverTime)
  i702.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[7], i702.startFrame)
  i702.cycleCount = i703[8]
  i702.rowIndex = i703[9]
  i702.flipU = i703[10]
  i702.flipV = i703[11]
  i702.spriteCount = i703[12]
  var i705 = i703[13]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.sprites = i704
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[1], i708.x)
  i708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.y)
  i708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.z)
  i708.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[4], i708.radial)
  i708.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[5], i708.speedModifier)
  i708.space = i709[6]
  i708.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[7], i708.orbitalX)
  i708.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[8], i708.orbitalY)
  i708.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[9], i708.orbitalZ)
  i708.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[10], i708.orbitalOffsetX)
  i708.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[11], i708.orbitalOffsetY)
  i708.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[12], i708.orbitalOffsetZ)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemNoise()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.separateAxes = !!i711[1]
  i710.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.strengthX)
  i710.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.strengthY)
  i710.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[4], i710.strengthZ)
  i710.frequency = i711[5]
  i710.damping = !!i711[6]
  i710.octaveCount = i711[7]
  i710.octaveMultiplier = i711[8]
  i710.octaveScale = i711[9]
  i710.quality = i711[10]
  i710.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[11], i710.scrollSpeed)
  i710.scrollSpeedMultiplier = i711[12]
  i710.remapEnabled = !!i711[13]
  i710.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[14], i710.remapX)
  i710.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[15], i710.remapY)
  i710.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[16], i710.remapZ)
  i710.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[17], i710.positionAmount)
  i710.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[18], i710.rotationAmount)
  i710.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[19], i710.sizeAmount)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemInheritVelocity()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.mode = i713[1]
  i712.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.curve)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemForceOverLifetime()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.x)
  i714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.y)
  i714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.z)
  i714.space = i715[4]
  i714.randomized = !!i715[5]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[1], i716.limit)
  i716.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[2], i716.limitX)
  i716.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[3], i716.limitY)
  i716.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[4], i716.limitZ)
  i716.dampen = i717[5]
  i716.separateAxes = !!i717[6]
  i716.space = i717[7]
  i716.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[8], i716.drag)
  i716.multiplyDragByParticleSize = !!i717[9]
  i716.multiplyDragByParticleVelocity = !!i717[10]
  return i716
}

Deserializers["mvSpringRope"] = function (request, data, root) {
  var i718 = root || request.c( 'mvSpringRope' )
  var i719 = data
  i718.ropeWidth = i719[0]
  i718.quality = i719[1]
  i718.damper = i719[2]
  i718.strength = i719[3]
  i718.velocity = i719[4]
  i718.waveCount = i719[5]
  i718.waveHeight = i719[6]
  i718.ropeSpeed = i719[7]
  i718.affectCurve = new pc.AnimationCurve( { keys_flow: i719[8] } )
  request.r(i719[9], i719[10], 0, i718, 'lineRenderer')
  request.r(i719[11], i719[12], 0, i718, 'targetPosition')
  i718.isOnAction = !!i719[13]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i721 = data
  i720.textureMode = i721[0]
  i720.alignment = i721[1]
  i720.widthCurve = new pc.AnimationCurve( { keys_flow: i721[2] } )
  i720.colorGradient = i721[3] ? new pc.ColorGradient(i721[3][0], i721[3][1], i721[3][2]) : null
  var i723 = i721[4]
  var i722 = []
  for(var i = 0; i < i723.length; i += 3) {
    i722.push( new pc.Vec3( i723[i + 0], i723[i + 1], i723[i + 2] ) );
  }
  i720.positions = i722
  i720.positionCount = i721[5]
  i720.widthMultiplier = i721[6]
  i720.startWidth = i721[7]
  i720.endWidth = i721[8]
  i720.numCornerVertices = i721[9]
  i720.numCapVertices = i721[10]
  i720.useWorldSpace = !!i721[11]
  i720.loop = !!i721[12]
  i720.startColor = new pc.Color(i721[13], i721[14], i721[15], i721[16])
  i720.endColor = new pc.Color(i721[17], i721[18], i721[19], i721[20])
  i720.generateLightingData = !!i721[21]
  i720.enabled = !!i721[22]
  request.r(i721[23], i721[24], 0, i720, 'sharedMaterial')
  var i725 = i721[25]
  var i724 = []
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 2, i724, '')
  }
  i720.sharedMaterials = i724
  i720.receiveShadows = !!i721[26]
  i720.shadowCastingMode = i721[27]
  i720.sortingLayerID = i721[28]
  i720.sortingOrder = i721[29]
  i720.lightmapIndex = i721[30]
  i720.lightmapSceneIndex = i721[31]
  i720.lightmapScaleOffset = new pc.Vec4( i721[32], i721[33], i721[34], i721[35] )
  i720.lightProbeUsage = i721[36]
  i720.reflectionProbeUsage = i721[37]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i729 = data
  i728.name = i729[0]
  i728.atlasId = i729[1]
  i728.mipmapCount = i729[2]
  i728.hdr = !!i729[3]
  i728.size = i729[4]
  i728.anisoLevel = i729[5]
  i728.filterMode = i729[6]
  var i731 = i729[7]
  var i730 = []
  for(var i = 0; i < i731.length; i += 4) {
    i730.push( UnityEngine.Rect.MinMaxRect(i731[i + 0], i731[i + 1], i731[i + 2], i731[i + 3]) );
  }
  i728.rects = i730
  i728.wrapU = i729[8]
  i728.wrapV = i729[9]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i735 = data
  i734.name = i735[0]
  i734.index = i735[1]
  i734.startup = !!i735[2]
  return i734
}

Deserializers["GameManagerSwing"] = function (request, data, root) {
  var i736 = root || request.c( 'GameManagerSwing' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'player')
  request.r(i737[2], i737[3], 0, i736, 'playerAnim')
  request.r(i737[4], i737[5], 0, i736, 'targetL')
  request.r(i737[6], i737[7], 0, i736, 'targetR')
  request.r(i737[8], i737[9], 0, i736, 'playerRid')
  request.r(i737[10], i737[11], 0, i736, 'btStart')
  request.r(i737[12], i737[13], 0, i736, 'btSwing')
  request.r(i737[14], i737[15], 0, i736, 'btSkill')
  request.r(i737[16], i737[17], 0, i736, 'playerPelvis')
  request.r(i737[18], i737[19], 0, i736, 'playerCam')
  request.r(i737[20], i737[21], 0, i736, 'playerCam1')
  request.r(i737[22], i737[23], 0, i736, 'cameraFollow')
  request.r(i737[24], i737[25], 0, i736, 'hookSound')
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i739 = data
  i738.pivot = new pc.Vec2( i739[0], i739[1] )
  i738.anchorMin = new pc.Vec2( i739[2], i739[3] )
  i738.anchorMax = new pc.Vec2( i739[4], i739[5] )
  i738.sizeDelta = new pc.Vec2( i739[6], i739[7] )
  i738.anchoredPosition3D = new pc.Vec3( i739[8], i739[9], i739[10] )
  i738.rotation = new pc.Quat(i739[11], i739[12], i739[13], i739[14])
  i738.scale = new pc.Vec3( i739[15], i739[16], i739[17] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i741 = data
  i740.enabled = !!i741[0]
  i740.planeDistance = i741[1]
  i740.referencePixelsPerUnit = i741[2]
  i740.isFallbackOverlay = !!i741[3]
  i740.renderMode = i741[4]
  i740.renderOrder = i741[5]
  i740.sortingLayerName = i741[6]
  i740.sortingOrder = i741[7]
  i740.scaleFactor = i741[8]
  request.r(i741[9], i741[10], 0, i740, 'worldCamera')
  i740.overrideSorting = !!i741[11]
  i740.pixelPerfect = !!i741[12]
  i740.targetDisplay = i741[13]
  i740.overridePixelPerfect = !!i741[14]
  return i740
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i743 = data
  i742.m_UiScaleMode = i743[0]
  i742.m_ReferencePixelsPerUnit = i743[1]
  i742.m_ScaleFactor = i743[2]
  i742.m_ReferenceResolution = new pc.Vec2( i743[3], i743[4] )
  i742.m_ScreenMatchMode = i743[5]
  i742.m_MatchWidthOrHeight = i743[6]
  i742.m_PhysicalUnit = i743[7]
  i742.m_FallbackScreenDPI = i743[8]
  i742.m_DefaultSpriteDPI = i743[9]
  i742.m_DynamicPixelsPerUnit = i743[10]
  i742.m_PresetInfoIsWorld = !!i743[11]
  return i742
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i745 = data
  i744.m_IgnoreReversedGraphics = !!i745[0]
  i744.m_BlockingObjects = i745[1]
  i744.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i745[2] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i747 = data
  i746.cullTransparentMesh = !!i747[0]
  return i746
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Image' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_Sprite')
  i748.m_Type = i749[2]
  i748.m_PreserveAspect = !!i749[3]
  i748.m_FillCenter = !!i749[4]
  i748.m_FillMethod = i749[5]
  i748.m_FillAmount = i749[6]
  i748.m_FillClockwise = !!i749[7]
  i748.m_FillOrigin = i749[8]
  i748.m_UseSpriteMesh = !!i749[9]
  i748.m_PixelsPerUnitMultiplier = i749[10]
  request.r(i749[11], i749[12], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[13]
  i748.m_Color = new pc.Color(i749[14], i749[15], i749[16], i749[17])
  i748.m_RaycastTarget = !!i749[18]
  i748.m_RaycastPadding = new pc.Vec4( i749[19], i749[20], i749[21], i749[22] )
  return i748
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.Button' )
  var i751 = data
  i750.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i751[0], i750.m_OnClick)
  i750.m_Navigation = request.d('UnityEngine.UI.Navigation', i751[1], i750.m_Navigation)
  i750.m_Transition = i751[2]
  i750.m_Colors = request.d('UnityEngine.UI.ColorBlock', i751[3], i750.m_Colors)
  i750.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i751[4], i750.m_SpriteState)
  i750.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i751[5], i750.m_AnimationTriggers)
  i750.m_Interactable = !!i751[6]
  request.r(i751[7], i751[8], 0, i750, 'm_TargetGraphic')
  return i750
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i753 = data
  i752.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i753[0], i752.m_PersistentCalls)
  return i752
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('UnityEngine.Events.PersistentCall', i757[i + 0]));
  }
  i754.m_Calls = i756
  return i754
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_Target')
  i760.m_TargetAssemblyTypeName = i761[2]
  i760.m_MethodName = i761[3]
  i760.m_Mode = i761[4]
  i760.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i761[5], i760.m_Arguments)
  i760.m_CallState = i761[6]
  return i760
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'm_ObjectArgument')
  i762.m_ObjectArgumentAssemblyTypeName = i763[2]
  i762.m_IntArgument = i763[3]
  i762.m_FloatArgument = i763[4]
  i762.m_StringArgument = i763[5]
  i762.m_BoolArgument = !!i763[6]
  return i762
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i765 = data
  i764.m_Mode = i765[0]
  i764.m_WrapAround = !!i765[1]
  request.r(i765[2], i765[3], 0, i764, 'm_SelectOnUp')
  request.r(i765[4], i765[5], 0, i764, 'm_SelectOnDown')
  request.r(i765[6], i765[7], 0, i764, 'm_SelectOnLeft')
  request.r(i765[8], i765[9], 0, i764, 'm_SelectOnRight')
  return i764
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i767 = data
  i766.m_NormalColor = new pc.Color(i767[0], i767[1], i767[2], i767[3])
  i766.m_HighlightedColor = new pc.Color(i767[4], i767[5], i767[6], i767[7])
  i766.m_PressedColor = new pc.Color(i767[8], i767[9], i767[10], i767[11])
  i766.m_SelectedColor = new pc.Color(i767[12], i767[13], i767[14], i767[15])
  i766.m_DisabledColor = new pc.Color(i767[16], i767[17], i767[18], i767[19])
  i766.m_ColorMultiplier = i767[20]
  i766.m_FadeDuration = i767[21]
  return i766
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'm_HighlightedSprite')
  request.r(i769[2], i769[3], 0, i768, 'm_PressedSprite')
  request.r(i769[4], i769[5], 0, i768, 'm_SelectedSprite')
  request.r(i769[6], i769[7], 0, i768, 'm_DisabledSprite')
  return i768
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i771 = data
  i770.m_NormalTrigger = i771[0]
  i770.m_HighlightedTrigger = i771[1]
  i770.m_PressedTrigger = i771[2]
  i770.m_SelectedTrigger = i771[3]
  i770.m_DisabledTrigger = i771[4]
  return i770
}

Deserializers["ButtonHook"] = function (request, data, root) {
  var i772 = root || request.c( 'ButtonHook' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'gameManager')
  i772.waitTime = i773[2]
  request.r(i773[3], i773[4], 0, i772, 'process')
  return i772
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.Text' )
  var i775 = data
  i774.m_FontData = request.d('UnityEngine.UI.FontData', i775[0], i774.m_FontData)
  i774.m_Text = i775[1]
  request.r(i775[2], i775[3], 0, i774, 'm_Material')
  i774.m_Maskable = !!i775[4]
  i774.m_Color = new pc.Color(i775[5], i775[6], i775[7], i775[8])
  i774.m_RaycastTarget = !!i775[9]
  i774.m_RaycastPadding = new pc.Vec4( i775[10], i775[11], i775[12], i775[13] )
  return i774
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.FontData' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_Font')
  i776.m_FontSize = i777[2]
  i776.m_FontStyle = i777[3]
  i776.m_BestFit = !!i777[4]
  i776.m_MinSize = i777[5]
  i776.m_MaxSize = i777[6]
  i776.m_Alignment = i777[7]
  i776.m_AlignByGeometry = !!i777[8]
  i776.m_RichText = !!i777[9]
  i776.m_HorizontalOverflow = i777[10]
  i776.m_VerticalOverflow = i777[11]
  i776.m_LineSpacing = i777[12]
  return i776
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.Outline' )
  var i779 = data
  i778.m_EffectColor = new pc.Color(i779[0], i779[1], i779[2], i779[3])
  i778.m_EffectDistance = new pc.Vec2( i779[4], i779[5] )
  i778.m_UseGraphicAlpha = !!i779[6]
  return i778
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i781 = data
  var i783 = i781[0]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i783[i + 0]));
  }
  i780.m_Delegates = i782
  return i780
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i787 = data
  i786.eventID = i787[0]
  i786.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i787[1], i786.callback)
  return i786
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i789 = data
  i788.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i789[0], i788.m_PersistentCalls)
  return i788
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i791 = data
  i790.m_EffectColor = new pc.Color(i791[0], i791[1], i791[2], i791[3])
  i790.m_EffectDistance = new pc.Vec2( i791[4], i791[5] )
  i790.m_UseGraphicAlpha = !!i791[6]
  return i790
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'm_FirstSelected')
  i792.m_sendNavigationEvents = !!i793[2]
  i792.m_DragThreshold = i793[3]
  return i792
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i795 = data
  i794.m_HorizontalAxis = i795[0]
  i794.m_VerticalAxis = i795[1]
  i794.m_SubmitButton = i795[2]
  i794.m_CancelButton = i795[3]
  i794.m_InputActionsPerSecond = i795[4]
  i794.m_RepeatDelay = i795[5]
  i794.m_ForceModuleActive = !!i795[6]
  i794.m_SendPointerHoverToParent = !!i795[7]
  return i794
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i796 = root || request.c( 'CameraFollow' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'positionPoint')
  request.r(i797[2], i797[3], 0, i796, 'lookAtPoint')
  request.r(i797[4], i797[5], 0, i796, 'tmpCam')
  request.r(i797[6], i797[7], 0, i796, 'mainCamera')
  i796.positionVelocity = i797[8]
  i796.lookAtVelocity = i797[9]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i799 = data
  i798.enabled = !!i799[0]
  i798.aspect = i799[1]
  i798.orthographic = !!i799[2]
  i798.orthographicSize = i799[3]
  i798.backgroundColor = new pc.Color(i799[4], i799[5], i799[6], i799[7])
  i798.nearClipPlane = i799[8]
  i798.farClipPlane = i799[9]
  i798.fieldOfView = i799[10]
  i798.depth = i799[11]
  i798.clearFlags = i799[12]
  i798.cullingMask = i799[13]
  i798.rect = i799[14]
  request.r(i799[15], i799[16], 0, i798, 'targetTexture')
  i798.usePhysicalProperties = !!i799[17]
  i798.focalLength = i799[18]
  i798.sensorSize = new pc.Vec2( i799[19], i799[20] )
  i798.lensShift = new pc.Vec2( i799[21], i799[22] )
  i798.gateFit = i799[23]
  i798.commandBufferCount = i799[24]
  i798.cameraType = i799[25]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i801 = data
  i800.ambientIntensity = i801[0]
  i800.reflectionIntensity = i801[1]
  i800.ambientMode = i801[2]
  i800.ambientLight = new pc.Color(i801[3], i801[4], i801[5], i801[6])
  i800.ambientSkyColor = new pc.Color(i801[7], i801[8], i801[9], i801[10])
  i800.ambientGroundColor = new pc.Color(i801[11], i801[12], i801[13], i801[14])
  i800.ambientEquatorColor = new pc.Color(i801[15], i801[16], i801[17], i801[18])
  i800.fogColor = new pc.Color(i801[19], i801[20], i801[21], i801[22])
  i800.fogEndDistance = i801[23]
  i800.fogStartDistance = i801[24]
  i800.fogDensity = i801[25]
  i800.fog = !!i801[26]
  request.r(i801[27], i801[28], 0, i800, 'skybox')
  i800.fogMode = i801[29]
  var i803 = i801[30]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i803[i + 0]) );
  }
  i800.lightmaps = i802
  i800.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i801[31], i800.lightProbes)
  i800.lightmapsMode = i801[32]
  i800.mixedBakeMode = i801[33]
  i800.environmentLightingMode = i801[34]
  i800.ambientProbe = new pc.SphericalHarmonicsL2(i801[35])
  i800.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i801[36])
  i800.useReferenceAmbientProbe = !!i801[37]
  request.r(i801[38], i801[39], 0, i800, 'customReflection')
  request.r(i801[40], i801[41], 0, i800, 'defaultReflection')
  i800.defaultReflectionMode = i801[42]
  i800.defaultReflectionResolution = i801[43]
  i800.sunLightObjectId = i801[44]
  i800.pixelLightCount = i801[45]
  i800.defaultReflectionHDR = !!i801[46]
  i800.hasLightDataAsset = !!i801[47]
  i800.hasManualGenerate = !!i801[48]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'lightmapColor')
  request.r(i807[2], i807[3], 0, i806, 'lightmapDirection')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i808 = root || new UnityEngine.LightProbes()
  var i809 = data
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i815 = data
  var i817 = i815[0]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i817[i + 0]));
  }
  i814.ShaderCompilationErrors = i816
  i814.name = i815[1]
  i814.guid = i815[2]
  var i819 = i815[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.shaderDefinedKeywords = i818
  var i821 = i815[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i821[i + 0]) );
  }
  i814.passes = i820
  var i823 = i815[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i823[i + 0]) );
  }
  i814.usePasses = i822
  var i825 = i815[6]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i825[i + 0]) );
  }
  i814.defaultParameterValues = i824
  request.r(i815[7], i815[8], 0, i814, 'unityFallbackShader')
  i814.readDepth = !!i815[9]
  i814.isCreatedByShaderGraph = !!i815[10]
  i814.compiled = !!i815[11]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i829 = data
  i828.shaderName = i829[0]
  i828.errorMessage = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i834 = root || new pc.UnityShaderPass()
  var i835 = data
  i834.id = i835[0]
  i834.subShaderIndex = i835[1]
  i834.name = i835[2]
  i834.passType = i835[3]
  i834.grabPassTextureName = i835[4]
  i834.usePass = !!i835[5]
  i834.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[6], i834.zTest)
  i834.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[7], i834.zWrite)
  i834.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[8], i834.culling)
  i834.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i835[9], i834.blending)
  i834.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i835[10], i834.alphaBlending)
  i834.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[11], i834.colorWriteMask)
  i834.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[12], i834.offsetUnits)
  i834.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[13], i834.offsetFactor)
  i834.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[14], i834.stencilRef)
  i834.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[15], i834.stencilReadMask)
  i834.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i835[16], i834.stencilWriteMask)
  i834.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[17], i834.stencilOp)
  i834.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[18], i834.stencilOpFront)
  i834.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i835[19], i834.stencilOpBack)
  var i837 = i835[20]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i837[i + 0]) );
  }
  i834.tags = i836
  var i839 = i835[21]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i834.passDefinedKeywords = i838
  var i841 = i835[22]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i841[i + 0]) );
  }
  i834.passDefinedKeywordGroups = i840
  var i843 = i835[23]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i843[i + 0]) );
  }
  i834.variants = i842
  var i845 = i835[24]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i845[i + 0]) );
  }
  i834.excludedVariants = i844
  i834.hasDepthReader = !!i835[25]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i847 = data
  i846.val = i847[0]
  i846.name = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i849 = data
  i848.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[0], i848.src)
  i848.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[1], i848.dst)
  i848.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[2], i848.op)
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i851 = data
  i850.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[0], i850.pass)
  i850.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[1], i850.fail)
  i850.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[2], i850.zFail)
  i850.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i851[3], i850.comp)
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i855 = data
  i854.name = i855[0]
  i854.value = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i859 = data
  var i861 = i859[0]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i858.keywords = i860
  i858.hasDiscard = !!i859[1]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i865 = data
  i864.passId = i865[0]
  i864.subShaderIndex = i865[1]
  var i867 = i865[2]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i864.keywords = i866
  i864.vertexProgram = i865[3]
  i864.fragmentProgram = i865[4]
  i864.exportedForWebGl2 = !!i865[5]
  i864.readDepth = !!i865[6]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'shader')
  i870.pass = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i875 = data
  i874.name = i875[0]
  i874.type = i875[1]
  i874.value = new pc.Vec4( i875[2], i875[3], i875[4], i875[5] )
  i874.textureValue = i875[6]
  i874.shaderPropertyFlag = i875[7]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i877 = data
  i876.name = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'texture')
  i876.aabb = i877[3]
  i876.vertices = i877[4]
  i876.triangles = i877[5]
  i876.textureRect = UnityEngine.Rect.MinMaxRect(i877[6], i877[7], i877[8], i877[9])
  i876.packedRect = UnityEngine.Rect.MinMaxRect(i877[10], i877[11], i877[12], i877[13])
  i876.border = new pc.Vec4( i877[14], i877[15], i877[16], i877[17] )
  i876.transparency = i877[18]
  i876.bounds = i877[19]
  i876.pixelsPerUnit = i877[20]
  i876.textureWidth = i877[21]
  i876.textureHeight = i877[22]
  i876.nativeSize = new pc.Vec2( i877[23], i877[24] )
  i876.pivot = new pc.Vec2( i877[25], i877[26] )
  i876.textureRectOffset = new pc.Vec2( i877[27], i877[28] )
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i879 = data
  i878.name = i879[0]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i881 = data
  i880.name = i881[0]
  i880.wrapMode = i881[1]
  i880.isLooping = !!i881[2]
  i880.length = i881[3]
  var i883 = i881[4]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i883[i + 0]) );
  }
  i880.curves = i882
  var i885 = i881[5]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i885[i + 0]) );
  }
  i880.events = i884
  i880.halfPrecision = !!i881[6]
  i880._frameRate = i881[7]
  i880.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i881[8], i880.localBounds)
  i880.hasMuscleCurves = !!i881[9]
  var i887 = i881[10]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i880.clipMuscleConstant = i886
  i880.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i881[11], i880.clipBindingConstant)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i891 = data
  i890.path = i891[0]
  i890.hash = i891[1]
  i890.componentType = i891[2]
  i890.property = i891[3]
  i890.keys = i891[4]
  var i893 = i891[5]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i893[i + 0]) );
  }
  i890.objectReferenceKeys = i892
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i897 = data
  i896.time = i897[0]
  request.r(i897[1], i897[2], 0, i896, 'value')
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i901 = data
  i900.functionName = i901[0]
  i900.floatParameter = i901[1]
  i900.intParameter = i901[2]
  i900.stringParameter = i901[3]
  request.r(i901[4], i901[5], 0, i900, 'objectReferenceParameter')
  i900.time = i901[6]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i903 = data
  i902.center = new pc.Vec3( i903[0], i903[1], i903[2] )
  i902.extends = new pc.Vec3( i903[3], i903[4], i903[5] )
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i906.genericBindings = i908
  var i911 = i907[1]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( i911[i + 0] );
  }
  i906.pptrCurveMapping = i910
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i913 = data
  i912.name = i913[0]
  i912.ascent = i913[1]
  i912.originalLineHeight = i913[2]
  i912.fontSize = i913[3]
  var i915 = i913[4]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i915[i + 0]) );
  }
  i912.characterInfo = i914
  request.r(i913[5], i913[6], 0, i912, 'texture')
  i912.originalFontSize = i913[7]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i919 = data
  i918.index = i919[0]
  i918.advance = i919[1]
  i918.bearing = i919[2]
  i918.glyphWidth = i919[3]
  i918.glyphHeight = i919[4]
  i918.minX = i919[5]
  i918.maxX = i919[6]
  i918.minY = i919[7]
  i918.maxY = i919[8]
  i918.uvBottomLeftX = i919[9]
  i918.uvBottomLeftY = i919[10]
  i918.uvBottomRightX = i919[11]
  i918.uvBottomRightY = i919[12]
  i918.uvTopLeftX = i919[13]
  i918.uvTopLeftY = i919[14]
  i918.uvTopRightX = i919[15]
  i918.uvTopRightY = i919[16]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i921 = data
  i920.name = i921[0]
  var i923 = i921[1]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i923[i + 0]) );
  }
  i920.layers = i922
  var i925 = i921[2]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i925[i + 0]) );
  }
  i920.parameters = i924
  i920.animationClips = i921[3]
  i920.avatarUnsupported = i921[4]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i929 = data
  i928.name = i929[0]
  i928.defaultWeight = i929[1]
  i928.blendingMode = i929[2]
  i928.avatarMask = i929[3]
  i928.syncedLayerIndex = i929[4]
  i928.syncedLayerAffectsTiming = !!i929[5]
  i928.syncedLayers = i929[6]
  i928.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i929[7], i928.stateMachine)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i931 = data
  i930.id = i931[0]
  i930.name = i931[1]
  i930.path = i931[2]
  var i933 = i931[3]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i933[i + 0]) );
  }
  i930.states = i932
  var i935 = i931[4]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i935[i + 0]) );
  }
  i930.machines = i934
  var i937 = i931[5]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i937[i + 0]) );
  }
  i930.entryStateTransitions = i936
  var i939 = i931[6]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i939[i + 0]) );
  }
  i930.exitStateTransitions = i938
  var i941 = i931[7]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i941[i + 0]) );
  }
  i930.anyStateTransitions = i940
  i930.defaultStateId = i931[8]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i945 = data
  i944.id = i945[0]
  i944.name = i945[1]
  i944.cycleOffset = i945[2]
  i944.cycleOffsetParameter = i945[3]
  i944.cycleOffsetParameterActive = !!i945[4]
  i944.mirror = !!i945[5]
  i944.mirrorParameter = i945[6]
  i944.mirrorParameterActive = !!i945[7]
  i944.motionId = i945[8]
  i944.nameHash = i945[9]
  i944.fullPathHash = i945[10]
  i944.speed = i945[11]
  i944.speedParameter = i945[12]
  i944.speedParameterActive = !!i945[13]
  i944.tag = i945[14]
  i944.tagHash = i945[15]
  i944.writeDefaultValues = !!i945[16]
  var i947 = i945[17]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.behaviours = i946
  var i949 = i945[18]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i949[i + 0]) );
  }
  i944.transitions = i948
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i955 = data
  i954.fullPath = i955[0]
  i954.canTransitionToSelf = !!i955[1]
  i954.duration = i955[2]
  i954.exitTime = i955[3]
  i954.hasExitTime = !!i955[4]
  i954.hasFixedDuration = !!i955[5]
  i954.interruptionSource = i955[6]
  i954.offset = i955[7]
  i954.orderedInterruption = !!i955[8]
  i954.destinationStateId = i955[9]
  i954.isExit = !!i955[10]
  i954.mute = !!i955[11]
  i954.solo = !!i955[12]
  var i957 = i955[13]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i957[i + 0]) );
  }
  i954.conditions = i956
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i961 = data
  i960.mode = i961[0]
  i960.parameter = i961[1]
  i960.threshold = i961[2]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i967 = data
  i966.destinationStateId = i967[0]
  i966.isExit = !!i967[1]
  i966.mute = !!i967[2]
  i966.solo = !!i967[3]
  var i969 = i967[4]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i969[i + 0]) );
  }
  i966.conditions = i968
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i973 = data
  i972.defaultBool = !!i973[0]
  i972.defaultFloat = i973[1]
  i972.defaultInt = i973[2]
  i972.name = i973[3]
  i972.nameHash = i973[4]
  i972.type = i973[5]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i975 = data
  var i977 = i975[0]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i977[i + 0]) );
  }
  i974.files = i976
  i974.componentToPrefabIds = i975[1]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i981 = data
  i980.path = i981[0]
  request.r(i981[1], i981[2], 0, i980, 'unityObject')
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i983 = data
  var i985 = i983[0]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i985[i + 0]) );
  }
  i982.scriptsExecutionOrder = i984
  var i987 = i983[1]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i987[i + 0]) );
  }
  i982.sortingLayers = i986
  var i989 = i983[2]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i989[i + 0]) );
  }
  i982.cullingLayers = i988
  i982.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i983[3], i982.timeSettings)
  i982.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i983[4], i982.physicsSettings)
  i982.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i983[5], i982.physics2DSettings)
  i982.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i983[6], i982.qualitySettings)
  i982.enableRealtimeShadows = !!i983[7]
  i982.enableAutoInstancing = !!i983[8]
  i982.enableDynamicBatching = !!i983[9]
  i982.lightmapEncodingQuality = i983[10]
  i982.desiredColorSpace = i983[11]
  var i991 = i983[12]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i982.allTags = i990
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i995 = data
  i994.name = i995[0]
  i994.value = i995[1]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i999 = data
  i998.id = i999[0]
  i998.name = i999[1]
  i998.value = i999[2]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1003 = data
  i1002.id = i1003[0]
  i1002.name = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1005 = data
  i1004.fixedDeltaTime = i1005[0]
  i1004.maximumDeltaTime = i1005[1]
  i1004.timeScale = i1005[2]
  i1004.maximumParticleTimestep = i1005[3]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1007 = data
  i1006.gravity = new pc.Vec3( i1007[0], i1007[1], i1007[2] )
  i1006.defaultSolverIterations = i1007[3]
  i1006.bounceThreshold = i1007[4]
  i1006.autoSyncTransforms = !!i1007[5]
  i1006.autoSimulation = !!i1007[6]
  var i1009 = i1007[7]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1009[i + 0]) );
  }
  i1006.collisionMatrix = i1008
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1013 = data
  i1012.enabled = !!i1013[0]
  i1012.layerId = i1013[1]
  i1012.otherLayerId = i1013[2]
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'material')
  i1014.gravity = new pc.Vec2( i1015[2], i1015[3] )
  i1014.positionIterations = i1015[4]
  i1014.velocityIterations = i1015[5]
  i1014.velocityThreshold = i1015[6]
  i1014.maxLinearCorrection = i1015[7]
  i1014.maxAngularCorrection = i1015[8]
  i1014.maxTranslationSpeed = i1015[9]
  i1014.maxRotationSpeed = i1015[10]
  i1014.baumgarteScale = i1015[11]
  i1014.baumgarteTOIScale = i1015[12]
  i1014.timeToSleep = i1015[13]
  i1014.linearSleepTolerance = i1015[14]
  i1014.angularSleepTolerance = i1015[15]
  i1014.defaultContactOffset = i1015[16]
  i1014.autoSimulation = !!i1015[17]
  i1014.queriesHitTriggers = !!i1015[18]
  i1014.queriesStartInColliders = !!i1015[19]
  i1014.callbacksOnDisable = !!i1015[20]
  i1014.reuseCollisionCallbacks = !!i1015[21]
  i1014.autoSyncTransforms = !!i1015[22]
  var i1017 = i1015[23]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1017[i + 0]) );
  }
  i1014.collisionMatrix = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1021 = data
  i1020.enabled = !!i1021[0]
  i1020.layerId = i1021[1]
  i1020.otherLayerId = i1021[2]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1025[i + 0]) );
  }
  i1022.qualityLevels = i1024
  var i1027 = i1023[1]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1022.names = i1026
  i1022.shadows = i1023[2]
  i1022.anisotropicFiltering = i1023[3]
  i1022.antiAliasing = i1023[4]
  i1022.lodBias = i1023[5]
  i1022.shadowCascades = i1023[6]
  i1022.shadowDistance = i1023[7]
  i1022.shadowmaskMode = i1023[8]
  i1022.shadowProjection = i1023[9]
  i1022.shadowResolution = i1023[10]
  i1022.softParticles = !!i1023[11]
  i1022.softVegetation = !!i1023[12]
  i1022.activeColorSpace = i1023[13]
  i1022.desiredColorSpace = i1023[14]
  i1022.masterTextureLimit = i1023[15]
  i1022.maxQueuedFrames = i1023[16]
  i1022.particleRaycastBudget = i1023[17]
  i1022.pixelLightCount = i1023[18]
  i1022.realtimeReflectionProbes = !!i1023[19]
  i1022.shadowCascade2Split = i1023[20]
  i1022.shadowCascade4Split = new pc.Vec3( i1023[21], i1023[22], i1023[23] )
  i1022.streamingMipmapsActive = !!i1023[24]
  i1022.vSyncCount = i1023[25]
  i1022.asyncUploadBufferSize = i1023[26]
  i1022.asyncUploadTimeSlice = i1023[27]
  i1022.billboardsFaceCameraPosition = !!i1023[28]
  i1022.shadowNearPlaneOffset = i1023[29]
  i1022.streamingMipmapsMemoryBudget = i1023[30]
  i1022.maximumLODLevel = i1023[31]
  i1022.streamingMipmapsAddAllCameras = !!i1023[32]
  i1022.streamingMipmapsMaxLevelReduction = i1023[33]
  i1022.streamingMipmapsRenderersPerFrame = i1023[34]
  i1022.resolutionScalingFixedDPIFactor = i1023[35]
  i1022.streamingMipmapsMaxFileIORequests = i1023[36]
  i1022.currentQualityLevel = i1023[37]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1031 = data
  i1030.name = i1031[0]
  var i1033 = i1031[1]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1033[i + 0]) );
  }
  i1030.tos = i1032
  var i1035 = i1031[2]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.constant = i1034
  i1030.isValid = !!i1031[3]
  i1030.isHuman = !!i1031[4]
  i1030.hasRootMotion = !!i1031[5]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1039 = data
  i1038.hash = i1039[0]
  i1038.path = i1039[1]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1043 = data
  i1042.weight = i1043[0]
  i1042.vertices = i1043[1]
  i1042.normals = i1043[2]
  i1042.tangents = i1043[3]
  return i1042
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[11],"55":[45],"56":[17],"57":[17],"58":[17],"59":[17],"60":[17],"61":[17],"62":[17],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[45],"78":[3],"79":[80],"81":[80],"29":[28],"82":[83],"84":[83],"85":[28],"86":[28],"32":[29],"34":[33,28],"87":[28],"31":[29],"88":[28],"89":[28],"90":[28],"91":[28],"92":[28],"93":[28],"94":[28],"95":[28],"96":[28],"97":[33,28],"98":[28],"99":[28],"100":[28],"101":[28],"38":[33,28],"102":[28],"103":[43],"104":[43],"44":[43],"105":[43],"106":[45],"107":[45],"108":[83]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MeshCollider","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.BoxCollider","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","SpiderController","mvSpringRope","GameManagerSwing","UnityEngine.Rigidbody","UnityEngine.CapsuleCollider","SpiderFly","UnityEngine.ParticleSystem","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.ParticleSystemRenderer","UnityEngine.LineRenderer","UnityEngine.Cubemap","CameraFollow","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","ButtonHook","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Outline","UnityEngine.EventSystems.EventTrigger","UnityEngine.UI.Shadow","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.53f1";

Deserializers.productName = "SF_Playable1";

Deserializers.lunaInitializationTime = "02/25/2025 05:09:05";

Deserializers.lunaDaysRunning = "2.3";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "spider_car";

Deserializers.lunaAppID = "27797";

Deserializers.projectId = "4113b20f2a9329e4387585bdd2ace0ed";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SF_Playable1";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "ae626c4b-7990-4467-9250-98cdffadb6d5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

