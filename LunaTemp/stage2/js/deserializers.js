var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4812 = root || request.c( 'UnityEngine.JointSpring' )
  var i4813 = data
  i4812.spring = i4813[0]
  i4812.damper = i4813[1]
  i4812.targetPosition = i4813[2]
  return i4812
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4814 = root || request.c( 'UnityEngine.JointMotor' )
  var i4815 = data
  i4814.m_TargetVelocity = i4815[0]
  i4814.m_Force = i4815[1]
  i4814.m_FreeSpin = i4815[2]
  return i4814
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4816 = root || request.c( 'UnityEngine.JointLimits' )
  var i4817 = data
  i4816.m_Min = i4817[0]
  i4816.m_Max = i4817[1]
  i4816.m_Bounciness = i4817[2]
  i4816.m_BounceMinVelocity = i4817[3]
  i4816.m_ContactDistance = i4817[4]
  i4816.minBounce = i4817[5]
  i4816.maxBounce = i4817[6]
  return i4816
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4818 = root || request.c( 'UnityEngine.JointDrive' )
  var i4819 = data
  i4818.m_PositionSpring = i4819[0]
  i4818.m_PositionDamper = i4819[1]
  i4818.m_MaximumForce = i4819[2]
  i4818.m_UseAcceleration = i4819[3]
  return i4818
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4820 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4821 = data
  i4820.m_Spring = i4821[0]
  i4820.m_Damper = i4821[1]
  return i4820
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4822 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4823 = data
  i4822.m_Limit = i4823[0]
  i4822.m_Bounciness = i4823[1]
  i4822.m_ContactDistance = i4823[2]
  return i4822
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4824 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4825 = data
  i4824.m_ExtremumSlip = i4825[0]
  i4824.m_ExtremumValue = i4825[1]
  i4824.m_AsymptoteSlip = i4825[2]
  i4824.m_AsymptoteValue = i4825[3]
  i4824.m_Stiffness = i4825[4]
  return i4824
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4826 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4827 = data
  i4826.m_LowerAngle = i4827[0]
  i4826.m_UpperAngle = i4827[1]
  return i4826
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4828 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4829 = data
  i4828.m_MotorSpeed = i4829[0]
  i4828.m_MaximumMotorTorque = i4829[1]
  return i4828
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4830 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4831 = data
  i4830.m_DampingRatio = i4831[0]
  i4830.m_Frequency = i4831[1]
  i4830.m_Angle = i4831[2]
  return i4830
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4832 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4833 = data
  i4832.m_LowerTranslation = i4833[0]
  i4832.m_UpperTranslation = i4833[1]
  return i4832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4835 = data
  i4834.position = new pc.Vec3( i4835[0], i4835[1], i4835[2] )
  i4834.scale = new pc.Vec3( i4835[3], i4835[4], i4835[5] )
  i4834.rotation = new pc.Quat(i4835[6], i4835[7], i4835[8], i4835[9])
  return i4834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4837 = data
  request.r(i4837[0], i4837[1], 0, i4836, 'animatorController')
  request.r(i4837[2], i4837[3], 0, i4836, 'avatar')
  i4836.updateMode = i4837[4]
  i4836.hasTransformHierarchy = !!i4837[5]
  i4836.applyRootMotion = !!i4837[6]
  var i4839 = i4837[7]
  var i4838 = []
  for(var i = 0; i < i4839.length; i += 2) {
  request.r(i4839[i + 0], i4839[i + 1], 2, i4838, '')
  }
  i4836.humanBones = i4838
  i4836.enabled = !!i4837[8]
  return i4836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4843 = data
  i4842.name = i4843[0]
  i4842.tagId = i4843[1]
  i4842.enabled = !!i4843[2]
  i4842.isStatic = !!i4843[3]
  i4842.layer = i4843[4]
  return i4842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i4844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i4845 = data
  i4844.enabled = !!i4845[0]
  request.r(i4845[1], i4845[2], 0, i4844, 'sharedMaterial')
  var i4847 = i4845[3]
  var i4846 = []
  for(var i = 0; i < i4847.length; i += 2) {
  request.r(i4847[i + 0], i4847[i + 1], 2, i4846, '')
  }
  i4844.sharedMaterials = i4846
  i4844.receiveShadows = !!i4845[4]
  i4844.shadowCastingMode = i4845[5]
  i4844.sortingLayerID = i4845[6]
  i4844.sortingOrder = i4845[7]
  i4844.lightmapIndex = i4845[8]
  i4844.lightmapSceneIndex = i4845[9]
  i4844.lightmapScaleOffset = new pc.Vec4( i4845[10], i4845[11], i4845[12], i4845[13] )
  i4844.lightProbeUsage = i4845[14]
  i4844.reflectionProbeUsage = i4845[15]
  request.r(i4845[16], i4845[17], 0, i4844, 'sharedMesh')
  var i4849 = i4845[18]
  var i4848 = []
  for(var i = 0; i < i4849.length; i += 2) {
  request.r(i4849[i + 0], i4849[i + 1], 2, i4848, '')
  }
  i4844.bones = i4848
  i4844.updateWhenOffscreen = !!i4845[19]
  i4844.localBounds = i4845[20]
  request.r(i4845[21], i4845[22], 0, i4844, 'rootBone')
  var i4851 = i4845[23]
  var i4850 = []
  for(var i = 0; i < i4851.length; i += 1) {
    i4850.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i4851[i + 0]) );
  }
  i4844.blendShapesWeights = i4850
  return i4844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i4856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i4857 = data
  i4856.weight = i4857[0]
  return i4856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4858 = root || new pc.UnityMaterial()
  var i4859 = data
  i4858.name = i4859[0]
  request.r(i4859[1], i4859[2], 0, i4858, 'shader')
  i4858.renderQueue = i4859[3]
  i4858.enableInstancing = !!i4859[4]
  var i4861 = i4859[5]
  var i4860 = []
  for(var i = 0; i < i4861.length; i += 1) {
    i4860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4861[i + 0]) );
  }
  i4858.floatParameters = i4860
  var i4863 = i4859[6]
  var i4862 = []
  for(var i = 0; i < i4863.length; i += 1) {
    i4862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4863[i + 0]) );
  }
  i4858.colorParameters = i4862
  var i4865 = i4859[7]
  var i4864 = []
  for(var i = 0; i < i4865.length; i += 1) {
    i4864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4865[i + 0]) );
  }
  i4858.vectorParameters = i4864
  var i4867 = i4859[8]
  var i4866 = []
  for(var i = 0; i < i4867.length; i += 1) {
    i4866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4867[i + 0]) );
  }
  i4858.textureParameters = i4866
  var i4869 = i4859[9]
  var i4868 = []
  for(var i = 0; i < i4869.length; i += 1) {
    i4868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4869[i + 0]) );
  }
  i4858.materialFlags = i4868
  return i4858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4873 = data
  i4872.name = i4873[0]
  i4872.value = i4873[1]
  return i4872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4877 = data
  i4876.name = i4877[0]
  i4876.value = new pc.Color(i4877[1], i4877[2], i4877[3], i4877[4])
  return i4876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4881 = data
  i4880.name = i4881[0]
  i4880.value = new pc.Vec4( i4881[1], i4881[2], i4881[3], i4881[4] )
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4885 = data
  i4884.name = i4885[0]
  request.r(i4885[1], i4885[2], 0, i4884, 'value')
  return i4884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4889 = data
  i4888.name = i4889[0]
  i4888.enabled = !!i4889[1]
  return i4888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4891 = data
  i4890.name = i4891[0]
  i4890.width = i4891[1]
  i4890.height = i4891[2]
  i4890.mipmapCount = i4891[3]
  i4890.anisoLevel = i4891[4]
  i4890.filterMode = i4891[5]
  i4890.hdr = !!i4891[6]
  i4890.format = i4891[7]
  i4890.wrapMode = i4891[8]
  i4890.alphaIsTransparency = !!i4891[9]
  i4890.alphaSource = i4891[10]
  i4890.graphicsFormat = i4891[11]
  i4890.sRGBTexture = !!i4891[12]
  i4890.desiredColorSpace = i4891[13]
  i4890.wrapU = i4891[14]
  i4890.wrapV = i4891[15]
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4893 = data
  i4892.name = i4893[0]
  i4892.halfPrecision = !!i4893[1]
  i4892.useUInt32IndexFormat = !!i4893[2]
  i4892.vertexCount = i4893[3]
  i4892.aabb = i4893[4]
  var i4895 = i4893[5]
  var i4894 = []
  for(var i = 0; i < i4895.length; i += 1) {
    i4894.push( !!i4895[i + 0] );
  }
  i4892.streams = i4894
  i4892.vertices = i4893[6]
  var i4897 = i4893[7]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 1) {
    i4896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4897[i + 0]) );
  }
  i4892.subMeshes = i4896
  var i4899 = i4893[8]
  var i4898 = []
  for(var i = 0; i < i4899.length; i += 16) {
    i4898.push( new pc.Mat4().setData(i4899[i + 0], i4899[i + 1], i4899[i + 2], i4899[i + 3],  i4899[i + 4], i4899[i + 5], i4899[i + 6], i4899[i + 7],  i4899[i + 8], i4899[i + 9], i4899[i + 10], i4899[i + 11],  i4899[i + 12], i4899[i + 13], i4899[i + 14], i4899[i + 15]) );
  }
  i4892.bindposes = i4898
  var i4901 = i4893[9]
  var i4900 = []
  for(var i = 0; i < i4901.length; i += 1) {
    i4900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4901[i + 0]) );
  }
  i4892.blendShapes = i4900
  return i4892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4907 = data
  i4906.triangles = i4907[0]
  return i4906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4913 = data
  i4912.name = i4913[0]
  var i4915 = i4913[1]
  var i4914 = []
  for(var i = 0; i < i4915.length; i += 1) {
    i4914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4915[i + 0]) );
  }
  i4912.frames = i4914
  return i4912
}

Deserializers["SpiderController"] = function (request, data, root) {
  var i4916 = root || request.c( 'SpiderController' )
  var i4917 = data
  request.r(i4917[0], i4917[1], 0, i4916, 'ropeL')
  request.r(i4917[2], i4917[3], 0, i4916, 'ropeR')
  request.r(i4917[4], i4917[5], 0, i4916, 'handL')
  request.r(i4917[6], i4917[7], 0, i4916, 'handR')
  request.r(i4917[8], i4917[9], 0, i4916, 'manager')
  return i4916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i4918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i4919 = data
  i4918.mass = i4919[0]
  i4918.drag = i4919[1]
  i4918.angularDrag = i4919[2]
  i4918.useGravity = !!i4919[3]
  i4918.isKinematic = !!i4919[4]
  i4918.constraints = i4919[5]
  i4918.maxAngularVelocity = i4919[6]
  i4918.collisionDetectionMode = i4919[7]
  i4918.interpolation = i4919[8]
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i4921 = data
  i4920.center = new pc.Vec3( i4921[0], i4921[1], i4921[2] )
  i4920.radius = i4921[3]
  i4920.height = i4921[4]
  i4920.direction = i4921[5]
  i4920.enabled = !!i4921[6]
  i4920.isTrigger = !!i4921[7]
  request.r(i4921[8], i4921[9], 0, i4920, 'material')
  return i4920
}

Deserializers["SpiderFly"] = function (request, data, root) {
  var i4922 = root || request.c( 'SpiderFly' )
  var i4923 = data
  request.r(i4923[0], i4923[1], 0, i4922, 'rid')
  request.r(i4923[2], i4923[3], 0, i4922, 'controller')
  request.r(i4923[4], i4923[5], 0, i4922, 'animator')
  request.r(i4923[6], i4923[7], 0, i4922, 'punchPoint')
  request.r(i4923[8], i4923[9], 0, i4922, 'gameManager')
  request.r(i4923[10], i4923[11], 0, i4922, 'handEff')
  request.r(i4923[12], i4923[13], 0, i4922, 'effectExplosion')
  var i4925 = i4923[14]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 2) {
  request.r(i4925[i + 0], i4925[i + 1], 2, i4924, '')
  }
  i4922.enemies = i4924
  request.r(i4923[15], i4923[16], 0, i4922, 'btFullGame')
  request.r(i4923[17], i4923[18], 0, i4922, 'guideHook')
  var i4927 = i4923[19]
  var i4926 = []
  for(var i = 0; i < i4927.length; i += 2) {
  request.r(i4927[i + 0], i4927[i + 1], 2, i4926, '')
  }
  i4922.clips = i4926
  request.r(i4923[20], i4923[21], 0, i4922, 'trailL')
  request.r(i4923[22], i4923[23], 0, i4922, 'trailR')
  request.r(i4923[24], i4923[25], 0, i4922, 'swingSound')
  request.r(i4923[26], i4923[27], 0, i4922, 'lightingSound')
  request.r(i4923[28], i4923[29], 0, i4922, 'exploseSound')
  request.r(i4923[30], i4923[31], 0, i4922, 'popupSpawn')
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4933 = data
  request.r(i4933[0], i4933[1], 0, i4932, 'clip')
  request.r(i4933[2], i4933[3], 0, i4932, 'outputAudioMixerGroup')
  i4932.playOnAwake = !!i4933[4]
  i4932.loop = !!i4933[5]
  i4932.time = i4933[6]
  i4932.volume = i4933[7]
  i4932.pitch = i4933[8]
  i4932.enabled = !!i4933[9]
  return i4932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i4934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i4935 = data
  i4934.enabled = !!i4935[0]
  request.r(i4935[1], i4935[2], 0, i4934, 'sharedMaterial')
  var i4937 = i4935[3]
  var i4936 = []
  for(var i = 0; i < i4937.length; i += 2) {
  request.r(i4937[i + 0], i4937[i + 1], 2, i4936, '')
  }
  i4934.sharedMaterials = i4936
  i4934.receiveShadows = !!i4935[4]
  i4934.shadowCastingMode = i4935[5]
  i4934.sortingLayerID = i4935[6]
  i4934.sortingOrder = i4935[7]
  i4934.lightmapIndex = i4935[8]
  i4934.lightmapSceneIndex = i4935[9]
  i4934.lightmapScaleOffset = new pc.Vec4( i4935[10], i4935[11], i4935[12], i4935[13] )
  i4934.lightProbeUsage = i4935[14]
  i4934.reflectionProbeUsage = i4935[15]
  var i4939 = i4935[16]
  var i4938 = []
  for(var i = 0; i < i4939.length; i += 3) {
    i4938.push( new pc.Vec3( i4939[i + 0], i4939[i + 1], i4939[i + 2] ) );
  }
  i4934.positions = i4938
  i4934.positionCount = i4935[17]
  i4934.time = i4935[18]
  i4934.startWidth = i4935[19]
  i4934.endWidth = i4935[20]
  i4934.widthMultiplier = i4935[21]
  i4934.autodestruct = !!i4935[22]
  i4934.emitting = !!i4935[23]
  i4934.numCornerVertices = i4935[24]
  i4934.numCapVertices = i4935[25]
  i4934.minVertexDistance = i4935[26]
  i4934.colorGradient = i4935[27] ? new pc.ColorGradient(i4935[27][0], i4935[27][1], i4935[27][2]) : null
  i4934.startColor = new pc.Color(i4935[28], i4935[29], i4935[30], i4935[31])
  i4934.endColor = new pc.Color(i4935[32], i4935[33], i4935[34], i4935[35])
  i4934.generateLightingData = !!i4935[36]
  i4934.textureMode = i4935[37]
  i4934.alignment = i4935[38]
  i4934.widthCurve = new pc.AnimationCurve( { keys_flow: i4935[39] } )
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4943 = data
  i4942.enabled = !!i4943[0]
  request.r(i4943[1], i4943[2], 0, i4942, 'sharedMaterial')
  var i4945 = i4943[3]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 2) {
  request.r(i4945[i + 0], i4945[i + 1], 2, i4944, '')
  }
  i4942.sharedMaterials = i4944
  i4942.receiveShadows = !!i4943[4]
  i4942.shadowCastingMode = i4943[5]
  i4942.sortingLayerID = i4943[6]
  i4942.sortingOrder = i4943[7]
  i4942.lightmapIndex = i4943[8]
  i4942.lightmapSceneIndex = i4943[9]
  i4942.lightmapScaleOffset = new pc.Vec4( i4943[10], i4943[11], i4943[12], i4943[13] )
  i4942.lightProbeUsage = i4943[14]
  i4942.reflectionProbeUsage = i4943[15]
  request.r(i4943[16], i4943[17], 0, i4942, 'mesh')
  i4942.meshCount = i4943[18]
  i4942.activeVertexStreamsCount = i4943[19]
  i4942.alignment = i4943[20]
  i4942.renderMode = i4943[21]
  i4942.sortMode = i4943[22]
  i4942.lengthScale = i4943[23]
  i4942.velocityScale = i4943[24]
  i4942.cameraVelocityScale = i4943[25]
  i4942.normalDirection = i4943[26]
  i4942.sortingFudge = i4943[27]
  i4942.minParticleSize = i4943[28]
  i4942.maxParticleSize = i4943[29]
  i4942.pivot = new pc.Vec3( i4943[30], i4943[31], i4943[32] )
  request.r(i4943[33], i4943[34], 0, i4942, 'trailMaterial')
  return i4942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4947 = data
  i4946.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4947[0], i4946.main)
  i4946.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4947[1], i4946.colorBySpeed)
  i4946.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4947[2], i4946.colorOverLifetime)
  i4946.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4947[3], i4946.emission)
  i4946.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4947[4], i4946.rotationBySpeed)
  i4946.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4947[5], i4946.rotationOverLifetime)
  i4946.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4947[6], i4946.shape)
  i4946.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4947[7], i4946.sizeBySpeed)
  i4946.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4947[8], i4946.sizeOverLifetime)
  i4946.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4947[9], i4946.textureSheetAnimation)
  i4946.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4947[10], i4946.velocityOverLifetime)
  i4946.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4947[11], i4946.noise)
  i4946.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4947[12], i4946.inheritVelocity)
  i4946.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4947[13], i4946.forceOverLifetime)
  i4946.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4947[14], i4946.limitVelocityOverLifetime)
  i4946.useAutoRandomSeed = !!i4947[15]
  i4946.randomSeed = i4947[16]
  return i4946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4948 = root || new pc.ParticleSystemMain()
  var i4949 = data
  i4948.duration = i4949[0]
  i4948.loop = !!i4949[1]
  i4948.prewarm = !!i4949[2]
  i4948.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[3], i4948.startDelay)
  i4948.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[4], i4948.startLifetime)
  i4948.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[5], i4948.startSpeed)
  i4948.startSize3D = !!i4949[6]
  i4948.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[7], i4948.startSizeX)
  i4948.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[8], i4948.startSizeY)
  i4948.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[9], i4948.startSizeZ)
  i4948.startRotation3D = !!i4949[10]
  i4948.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[11], i4948.startRotationX)
  i4948.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[12], i4948.startRotationY)
  i4948.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[13], i4948.startRotationZ)
  i4948.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4949[14], i4948.startColor)
  i4948.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4949[15], i4948.gravityModifier)
  i4948.simulationSpace = i4949[16]
  request.r(i4949[17], i4949[18], 0, i4948, 'customSimulationSpace')
  i4948.simulationSpeed = i4949[19]
  i4948.useUnscaledTime = !!i4949[20]
  i4948.scalingMode = i4949[21]
  i4948.playOnAwake = !!i4949[22]
  i4948.maxParticles = i4949[23]
  i4948.emitterVelocityMode = i4949[24]
  i4948.stopAction = i4949[25]
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4950 = root || new pc.MinMaxCurve()
  var i4951 = data
  i4950.mode = i4951[0]
  i4950.curveMin = new pc.AnimationCurve( { keys_flow: i4951[1] } )
  i4950.curveMax = new pc.AnimationCurve( { keys_flow: i4951[2] } )
  i4950.curveMultiplier = i4951[3]
  i4950.constantMin = i4951[4]
  i4950.constantMax = i4951[5]
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4952 = root || new pc.MinMaxGradient()
  var i4953 = data
  i4952.mode = i4953[0]
  i4952.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4953[1], i4952.gradientMin)
  i4952.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4953[2], i4952.gradientMax)
  i4952.colorMin = new pc.Color(i4953[3], i4953[4], i4953[5], i4953[6])
  i4952.colorMax = new pc.Color(i4953[7], i4953[8], i4953[9], i4953[10])
  return i4952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4955 = data
  i4954.mode = i4955[0]
  var i4957 = i4955[1]
  var i4956 = []
  for(var i = 0; i < i4957.length; i += 1) {
    i4956.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4957[i + 0]) );
  }
  i4954.colorKeys = i4956
  var i4959 = i4955[2]
  var i4958 = []
  for(var i = 0; i < i4959.length; i += 1) {
    i4958.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4959[i + 0]) );
  }
  i4954.alphaKeys = i4958
  return i4954
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4960 = root || new pc.ParticleSystemColorBySpeed()
  var i4961 = data
  i4960.enabled = !!i4961[0]
  i4960.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4961[1], i4960.color)
  i4960.range = new pc.Vec2( i4961[2], i4961[3] )
  return i4960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4965 = data
  i4964.color = new pc.Color(i4965[0], i4965[1], i4965[2], i4965[3])
  i4964.time = i4965[4]
  return i4964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4969 = data
  i4968.alpha = i4969[0]
  i4968.time = i4969[1]
  return i4968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4970 = root || new pc.ParticleSystemColorOverLifetime()
  var i4971 = data
  i4970.enabled = !!i4971[0]
  i4970.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4971[1], i4970.color)
  return i4970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4972 = root || new pc.ParticleSystemEmitter()
  var i4973 = data
  i4972.enabled = !!i4973[0]
  i4972.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4973[1], i4972.rateOverTime)
  i4972.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4973[2], i4972.rateOverDistance)
  var i4975 = i4973[3]
  var i4974 = []
  for(var i = 0; i < i4975.length; i += 1) {
    i4974.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4975[i + 0]) );
  }
  i4972.bursts = i4974
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4978 = root || new pc.ParticleSystemBurst()
  var i4979 = data
  i4978.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4979[0], i4978.count)
  i4978.cycleCount = i4979[1]
  i4978.minCount = i4979[2]
  i4978.maxCount = i4979[3]
  i4978.repeatInterval = i4979[4]
  i4978.time = i4979[5]
  return i4978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4980 = root || new pc.ParticleSystemRotationBySpeed()
  var i4981 = data
  i4980.enabled = !!i4981[0]
  i4980.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4981[1], i4980.x)
  i4980.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4981[2], i4980.y)
  i4980.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4981[3], i4980.z)
  i4980.separateAxes = !!i4981[4]
  i4980.range = new pc.Vec2( i4981[5], i4981[6] )
  return i4980
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4982 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4983 = data
  i4982.enabled = !!i4983[0]
  i4982.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4983[1], i4982.x)
  i4982.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4983[2], i4982.y)
  i4982.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4983[3], i4982.z)
  i4982.separateAxes = !!i4983[4]
  return i4982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4984 = root || new pc.ParticleSystemShape()
  var i4985 = data
  i4984.enabled = !!i4985[0]
  i4984.shapeType = i4985[1]
  i4984.randomDirectionAmount = i4985[2]
  i4984.sphericalDirectionAmount = i4985[3]
  i4984.randomPositionAmount = i4985[4]
  i4984.alignToDirection = !!i4985[5]
  i4984.radius = i4985[6]
  i4984.radiusMode = i4985[7]
  i4984.radiusSpread = i4985[8]
  i4984.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[9], i4984.radiusSpeed)
  i4984.radiusThickness = i4985[10]
  i4984.angle = i4985[11]
  i4984.length = i4985[12]
  i4984.boxThickness = new pc.Vec3( i4985[13], i4985[14], i4985[15] )
  i4984.meshShapeType = i4985[16]
  request.r(i4985[17], i4985[18], 0, i4984, 'mesh')
  request.r(i4985[19], i4985[20], 0, i4984, 'meshRenderer')
  request.r(i4985[21], i4985[22], 0, i4984, 'skinnedMeshRenderer')
  i4984.useMeshMaterialIndex = !!i4985[23]
  i4984.meshMaterialIndex = i4985[24]
  i4984.useMeshColors = !!i4985[25]
  i4984.normalOffset = i4985[26]
  i4984.arc = i4985[27]
  i4984.arcMode = i4985[28]
  i4984.arcSpread = i4985[29]
  i4984.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4985[30], i4984.arcSpeed)
  i4984.donutRadius = i4985[31]
  i4984.position = new pc.Vec3( i4985[32], i4985[33], i4985[34] )
  i4984.rotation = new pc.Vec3( i4985[35], i4985[36], i4985[37] )
  i4984.scale = new pc.Vec3( i4985[38], i4985[39], i4985[40] )
  return i4984
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4986 = root || new pc.ParticleSystemSizeBySpeed()
  var i4987 = data
  i4986.enabled = !!i4987[0]
  i4986.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[1], i4986.x)
  i4986.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[2], i4986.y)
  i4986.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4987[3], i4986.z)
  i4986.separateAxes = !!i4987[4]
  i4986.range = new pc.Vec2( i4987[5], i4987[6] )
  return i4986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4988 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4989 = data
  i4988.enabled = !!i4989[0]
  i4988.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4989[1], i4988.x)
  i4988.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4989[2], i4988.y)
  i4988.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4989[3], i4988.z)
  i4988.separateAxes = !!i4989[4]
  return i4988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4990 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4991 = data
  i4990.enabled = !!i4991[0]
  i4990.mode = i4991[1]
  i4990.animation = i4991[2]
  i4990.numTilesX = i4991[3]
  i4990.numTilesY = i4991[4]
  i4990.useRandomRow = !!i4991[5]
  i4990.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4991[6], i4990.frameOverTime)
  i4990.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4991[7], i4990.startFrame)
  i4990.cycleCount = i4991[8]
  i4990.rowIndex = i4991[9]
  i4990.flipU = i4991[10]
  i4990.flipV = i4991[11]
  i4990.spriteCount = i4991[12]
  var i4993 = i4991[13]
  var i4992 = []
  for(var i = 0; i < i4993.length; i += 2) {
  request.r(i4993[i + 0], i4993[i + 1], 2, i4992, '')
  }
  i4990.sprites = i4992
  return i4990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4996 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4997 = data
  i4996.enabled = !!i4997[0]
  i4996.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[1], i4996.x)
  i4996.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[2], i4996.y)
  i4996.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[3], i4996.z)
  i4996.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[4], i4996.radial)
  i4996.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[5], i4996.speedModifier)
  i4996.space = i4997[6]
  i4996.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[7], i4996.orbitalX)
  i4996.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[8], i4996.orbitalY)
  i4996.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[9], i4996.orbitalZ)
  i4996.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[10], i4996.orbitalOffsetX)
  i4996.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[11], i4996.orbitalOffsetY)
  i4996.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4997[12], i4996.orbitalOffsetZ)
  return i4996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4998 = root || new pc.ParticleSystemNoise()
  var i4999 = data
  i4998.enabled = !!i4999[0]
  i4998.separateAxes = !!i4999[1]
  i4998.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[2], i4998.strengthX)
  i4998.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[3], i4998.strengthY)
  i4998.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[4], i4998.strengthZ)
  i4998.frequency = i4999[5]
  i4998.damping = !!i4999[6]
  i4998.octaveCount = i4999[7]
  i4998.octaveMultiplier = i4999[8]
  i4998.octaveScale = i4999[9]
  i4998.quality = i4999[10]
  i4998.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[11], i4998.scrollSpeed)
  i4998.scrollSpeedMultiplier = i4999[12]
  i4998.remapEnabled = !!i4999[13]
  i4998.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[14], i4998.remapX)
  i4998.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[15], i4998.remapY)
  i4998.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[16], i4998.remapZ)
  i4998.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[17], i4998.positionAmount)
  i4998.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[18], i4998.rotationAmount)
  i4998.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4999[19], i4998.sizeAmount)
  return i4998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5000 = root || new pc.ParticleSystemInheritVelocity()
  var i5001 = data
  i5000.enabled = !!i5001[0]
  i5000.mode = i5001[1]
  i5000.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5001[2], i5000.curve)
  return i5000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5002 = root || new pc.ParticleSystemForceOverLifetime()
  var i5003 = data
  i5002.enabled = !!i5003[0]
  i5002.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5003[1], i5002.x)
  i5002.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5003[2], i5002.y)
  i5002.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5003[3], i5002.z)
  i5002.space = i5003[4]
  i5002.randomized = !!i5003[5]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5004 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5005 = data
  i5004.enabled = !!i5005[0]
  i5004.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5005[1], i5004.limit)
  i5004.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5005[2], i5004.limitX)
  i5004.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5005[3], i5004.limitY)
  i5004.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5005[4], i5004.limitZ)
  i5004.dampen = i5005[5]
  i5004.separateAxes = !!i5005[6]
  i5004.space = i5005[7]
  i5004.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5005[8], i5004.drag)
  i5004.multiplyDragByParticleSize = !!i5005[9]
  i5004.multiplyDragByParticleVelocity = !!i5005[10]
  return i5004
}

Deserializers["mvSpringRope"] = function (request, data, root) {
  var i5006 = root || request.c( 'mvSpringRope' )
  var i5007 = data
  i5006.ropeWidth = i5007[0]
  i5006.quality = i5007[1]
  i5006.damper = i5007[2]
  i5006.strength = i5007[3]
  i5006.velocity = i5007[4]
  i5006.waveCount = i5007[5]
  i5006.waveHeight = i5007[6]
  i5006.ropeSpeed = i5007[7]
  i5006.affectCurve = new pc.AnimationCurve( { keys_flow: i5007[8] } )
  request.r(i5007[9], i5007[10], 0, i5006, 'lineRenderer')
  request.r(i5007[11], i5007[12], 0, i5006, 'targetPosition')
  i5006.isOnAction = !!i5007[13]
  return i5006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i5008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i5009 = data
  i5008.textureMode = i5009[0]
  i5008.alignment = i5009[1]
  i5008.widthCurve = new pc.AnimationCurve( { keys_flow: i5009[2] } )
  i5008.colorGradient = i5009[3] ? new pc.ColorGradient(i5009[3][0], i5009[3][1], i5009[3][2]) : null
  var i5011 = i5009[4]
  var i5010 = []
  for(var i = 0; i < i5011.length; i += 3) {
    i5010.push( new pc.Vec3( i5011[i + 0], i5011[i + 1], i5011[i + 2] ) );
  }
  i5008.positions = i5010
  i5008.positionCount = i5009[5]
  i5008.widthMultiplier = i5009[6]
  i5008.startWidth = i5009[7]
  i5008.endWidth = i5009[8]
  i5008.numCornerVertices = i5009[9]
  i5008.numCapVertices = i5009[10]
  i5008.useWorldSpace = !!i5009[11]
  i5008.loop = !!i5009[12]
  i5008.startColor = new pc.Color(i5009[13], i5009[14], i5009[15], i5009[16])
  i5008.endColor = new pc.Color(i5009[17], i5009[18], i5009[19], i5009[20])
  i5008.generateLightingData = !!i5009[21]
  i5008.enabled = !!i5009[22]
  request.r(i5009[23], i5009[24], 0, i5008, 'sharedMaterial')
  var i5013 = i5009[25]
  var i5012 = []
  for(var i = 0; i < i5013.length; i += 2) {
  request.r(i5013[i + 0], i5013[i + 1], 2, i5012, '')
  }
  i5008.sharedMaterials = i5012
  i5008.receiveShadows = !!i5009[26]
  i5008.shadowCastingMode = i5009[27]
  i5008.sortingLayerID = i5009[28]
  i5008.sortingOrder = i5009[29]
  i5008.lightmapIndex = i5009[30]
  i5008.lightmapSceneIndex = i5009[31]
  i5008.lightmapScaleOffset = new pc.Vec4( i5009[32], i5009[33], i5009[34], i5009[35] )
  i5008.lightProbeUsage = i5009[36]
  i5008.reflectionProbeUsage = i5009[37]
  return i5008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i5014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i5015 = data
  request.r(i5015[0], i5015[1], 0, i5014, 'sharedMesh')
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i5016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i5017 = data
  request.r(i5017[0], i5017[1], 0, i5016, 'additionalVertexStreams')
  i5016.enabled = !!i5017[2]
  request.r(i5017[3], i5017[4], 0, i5016, 'sharedMaterial')
  var i5019 = i5017[5]
  var i5018 = []
  for(var i = 0; i < i5019.length; i += 2) {
  request.r(i5019[i + 0], i5019[i + 1], 2, i5018, '')
  }
  i5016.sharedMaterials = i5018
  i5016.receiveShadows = !!i5017[6]
  i5016.shadowCastingMode = i5017[7]
  i5016.sortingLayerID = i5017[8]
  i5016.sortingOrder = i5017[9]
  i5016.lightmapIndex = i5017[10]
  i5016.lightmapSceneIndex = i5017[11]
  i5016.lightmapScaleOffset = new pc.Vec4( i5017[12], i5017[13], i5017[14], i5017[15] )
  i5016.lightProbeUsage = i5017[16]
  i5016.reflectionProbeUsage = i5017[17]
  return i5016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i5020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i5021 = data
  i5020.enabled = !!i5021[0]
  i5020.isTrigger = !!i5021[1]
  request.r(i5021[2], i5021[3], 0, i5020, 'material')
  request.r(i5021[4], i5021[5], 0, i5020, 'sharedMesh')
  i5020.convex = !!i5021[6]
  return i5020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5023 = data
  i5022.name = i5023[0]
  i5022.atlasId = i5023[1]
  i5022.mipmapCount = i5023[2]
  i5022.hdr = !!i5023[3]
  i5022.size = i5023[4]
  i5022.anisoLevel = i5023[5]
  i5022.filterMode = i5023[6]
  var i5025 = i5023[7]
  var i5024 = []
  for(var i = 0; i < i5025.length; i += 4) {
    i5024.push( UnityEngine.Rect.MinMaxRect(i5025[i + 0], i5025[i + 1], i5025[i + 2], i5025[i + 3]) );
  }
  i5022.rects = i5024
  i5022.wrapU = i5023[8]
  i5022.wrapV = i5023[9]
  return i5022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5029 = data
  i5028.name = i5029[0]
  i5028.index = i5029[1]
  i5028.startup = !!i5029[2]
  return i5028
}

Deserializers["GameManagerSwing"] = function (request, data, root) {
  var i5030 = root || request.c( 'GameManagerSwing' )
  var i5031 = data
  request.r(i5031[0], i5031[1], 0, i5030, 'player')
  request.r(i5031[2], i5031[3], 0, i5030, 'playerAnim')
  request.r(i5031[4], i5031[5], 0, i5030, 'targetL')
  request.r(i5031[6], i5031[7], 0, i5030, 'targetR')
  request.r(i5031[8], i5031[9], 0, i5030, 'playerRid')
  request.r(i5031[10], i5031[11], 0, i5030, 'btStart')
  request.r(i5031[12], i5031[13], 0, i5030, 'btSwing')
  request.r(i5031[14], i5031[15], 0, i5030, 'btSkill')
  request.r(i5031[16], i5031[17], 0, i5030, 'playerPelvis')
  request.r(i5031[18], i5031[19], 0, i5030, 'playerCam')
  request.r(i5031[20], i5031[21], 0, i5030, 'playerCam1')
  request.r(i5031[22], i5031[23], 0, i5030, 'cameraFollow')
  request.r(i5031[24], i5031[25], 0, i5030, 'hookSound')
  request.r(i5031[26], i5031[27], 0, i5030, 'wind')
  request.r(i5031[28], i5031[29], 0, i5030, 'trailL')
  request.r(i5031[30], i5031[31], 0, i5030, 'trailR')
  return i5030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5033 = data
  i5032.pivot = new pc.Vec2( i5033[0], i5033[1] )
  i5032.anchorMin = new pc.Vec2( i5033[2], i5033[3] )
  i5032.anchorMax = new pc.Vec2( i5033[4], i5033[5] )
  i5032.sizeDelta = new pc.Vec2( i5033[6], i5033[7] )
  i5032.anchoredPosition3D = new pc.Vec3( i5033[8], i5033[9], i5033[10] )
  i5032.rotation = new pc.Quat(i5033[11], i5033[12], i5033[13], i5033[14])
  i5032.scale = new pc.Vec3( i5033[15], i5033[16], i5033[17] )
  return i5032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5035 = data
  i5034.enabled = !!i5035[0]
  i5034.planeDistance = i5035[1]
  i5034.referencePixelsPerUnit = i5035[2]
  i5034.isFallbackOverlay = !!i5035[3]
  i5034.renderMode = i5035[4]
  i5034.renderOrder = i5035[5]
  i5034.sortingLayerName = i5035[6]
  i5034.sortingOrder = i5035[7]
  i5034.scaleFactor = i5035[8]
  request.r(i5035[9], i5035[10], 0, i5034, 'worldCamera')
  i5034.overrideSorting = !!i5035[11]
  i5034.pixelPerfect = !!i5035[12]
  i5034.targetDisplay = i5035[13]
  i5034.overridePixelPerfect = !!i5035[14]
  return i5034
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5036 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5037 = data
  i5036.m_UiScaleMode = i5037[0]
  i5036.m_ReferencePixelsPerUnit = i5037[1]
  i5036.m_ScaleFactor = i5037[2]
  i5036.m_ReferenceResolution = new pc.Vec2( i5037[3], i5037[4] )
  i5036.m_ScreenMatchMode = i5037[5]
  i5036.m_MatchWidthOrHeight = i5037[6]
  i5036.m_PhysicalUnit = i5037[7]
  i5036.m_FallbackScreenDPI = i5037[8]
  i5036.m_DefaultSpriteDPI = i5037[9]
  i5036.m_DynamicPixelsPerUnit = i5037[10]
  i5036.m_PresetInfoIsWorld = !!i5037[11]
  return i5036
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5038 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5039 = data
  i5038.m_IgnoreReversedGraphics = !!i5039[0]
  i5038.m_BlockingObjects = i5039[1]
  i5038.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5039[2] )
  return i5038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5041 = data
  i5040.cullTransparentMesh = !!i5041[0]
  return i5040
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5042 = root || request.c( 'UnityEngine.UI.Image' )
  var i5043 = data
  request.r(i5043[0], i5043[1], 0, i5042, 'm_Sprite')
  i5042.m_Type = i5043[2]
  i5042.m_PreserveAspect = !!i5043[3]
  i5042.m_FillCenter = !!i5043[4]
  i5042.m_FillMethod = i5043[5]
  i5042.m_FillAmount = i5043[6]
  i5042.m_FillClockwise = !!i5043[7]
  i5042.m_FillOrigin = i5043[8]
  i5042.m_UseSpriteMesh = !!i5043[9]
  i5042.m_PixelsPerUnitMultiplier = i5043[10]
  request.r(i5043[11], i5043[12], 0, i5042, 'm_Material')
  i5042.m_Maskable = !!i5043[13]
  i5042.m_Color = new pc.Color(i5043[14], i5043[15], i5043[16], i5043[17])
  i5042.m_RaycastTarget = !!i5043[18]
  i5042.m_RaycastPadding = new pc.Vec4( i5043[19], i5043[20], i5043[21], i5043[22] )
  return i5042
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5044 = root || request.c( 'UnityEngine.UI.Button' )
  var i5045 = data
  i5044.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5045[0], i5044.m_OnClick)
  i5044.m_Navigation = request.d('UnityEngine.UI.Navigation', i5045[1], i5044.m_Navigation)
  i5044.m_Transition = i5045[2]
  i5044.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5045[3], i5044.m_Colors)
  i5044.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5045[4], i5044.m_SpriteState)
  i5044.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5045[5], i5044.m_AnimationTriggers)
  i5044.m_Interactable = !!i5045[6]
  request.r(i5045[7], i5045[8], 0, i5044, 'm_TargetGraphic')
  return i5044
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5046 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5047 = data
  i5046.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5047[0], i5046.m_PersistentCalls)
  return i5046
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5048 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5049 = data
  var i5051 = i5049[0]
  var i5050 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5051.length; i += 1) {
    i5050.add(request.d('UnityEngine.Events.PersistentCall', i5051[i + 0]));
  }
  i5048.m_Calls = i5050
  return i5048
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5054 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5055 = data
  request.r(i5055[0], i5055[1], 0, i5054, 'm_Target')
  i5054.m_TargetAssemblyTypeName = i5055[2]
  i5054.m_MethodName = i5055[3]
  i5054.m_Mode = i5055[4]
  i5054.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5055[5], i5054.m_Arguments)
  i5054.m_CallState = i5055[6]
  return i5054
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5056 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5057 = data
  request.r(i5057[0], i5057[1], 0, i5056, 'm_ObjectArgument')
  i5056.m_ObjectArgumentAssemblyTypeName = i5057[2]
  i5056.m_IntArgument = i5057[3]
  i5056.m_FloatArgument = i5057[4]
  i5056.m_StringArgument = i5057[5]
  i5056.m_BoolArgument = !!i5057[6]
  return i5056
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5058 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5059 = data
  i5058.m_Mode = i5059[0]
  i5058.m_WrapAround = !!i5059[1]
  request.r(i5059[2], i5059[3], 0, i5058, 'm_SelectOnUp')
  request.r(i5059[4], i5059[5], 0, i5058, 'm_SelectOnDown')
  request.r(i5059[6], i5059[7], 0, i5058, 'm_SelectOnLeft')
  request.r(i5059[8], i5059[9], 0, i5058, 'm_SelectOnRight')
  return i5058
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5060 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5061 = data
  i5060.m_NormalColor = new pc.Color(i5061[0], i5061[1], i5061[2], i5061[3])
  i5060.m_HighlightedColor = new pc.Color(i5061[4], i5061[5], i5061[6], i5061[7])
  i5060.m_PressedColor = new pc.Color(i5061[8], i5061[9], i5061[10], i5061[11])
  i5060.m_SelectedColor = new pc.Color(i5061[12], i5061[13], i5061[14], i5061[15])
  i5060.m_DisabledColor = new pc.Color(i5061[16], i5061[17], i5061[18], i5061[19])
  i5060.m_ColorMultiplier = i5061[20]
  i5060.m_FadeDuration = i5061[21]
  return i5060
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5062 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5063 = data
  request.r(i5063[0], i5063[1], 0, i5062, 'm_HighlightedSprite')
  request.r(i5063[2], i5063[3], 0, i5062, 'm_PressedSprite')
  request.r(i5063[4], i5063[5], 0, i5062, 'm_SelectedSprite')
  request.r(i5063[6], i5063[7], 0, i5062, 'm_DisabledSprite')
  return i5062
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5064 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5065 = data
  i5064.m_NormalTrigger = i5065[0]
  i5064.m_HighlightedTrigger = i5065[1]
  i5064.m_PressedTrigger = i5065[2]
  i5064.m_SelectedTrigger = i5065[3]
  i5064.m_DisabledTrigger = i5065[4]
  return i5064
}

Deserializers["ButtonHook"] = function (request, data, root) {
  var i5066 = root || request.c( 'ButtonHook' )
  var i5067 = data
  request.r(i5067[0], i5067[1], 0, i5066, 'gameManager')
  i5066.waitTime = i5067[2]
  request.r(i5067[3], i5067[4], 0, i5066, 'process')
  return i5066
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5068 = root || request.c( 'UnityEngine.UI.Text' )
  var i5069 = data
  i5068.m_FontData = request.d('UnityEngine.UI.FontData', i5069[0], i5068.m_FontData)
  i5068.m_Text = i5069[1]
  request.r(i5069[2], i5069[3], 0, i5068, 'm_Material')
  i5068.m_Maskable = !!i5069[4]
  i5068.m_Color = new pc.Color(i5069[5], i5069[6], i5069[7], i5069[8])
  i5068.m_RaycastTarget = !!i5069[9]
  i5068.m_RaycastPadding = new pc.Vec4( i5069[10], i5069[11], i5069[12], i5069[13] )
  return i5068
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5070 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5071 = data
  request.r(i5071[0], i5071[1], 0, i5070, 'm_Font')
  i5070.m_FontSize = i5071[2]
  i5070.m_FontStyle = i5071[3]
  i5070.m_BestFit = !!i5071[4]
  i5070.m_MinSize = i5071[5]
  i5070.m_MaxSize = i5071[6]
  i5070.m_Alignment = i5071[7]
  i5070.m_AlignByGeometry = !!i5071[8]
  i5070.m_RichText = !!i5071[9]
  i5070.m_HorizontalOverflow = i5071[10]
  i5070.m_VerticalOverflow = i5071[11]
  i5070.m_LineSpacing = i5071[12]
  return i5070
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i5072 = root || request.c( 'UnityEngine.UI.Outline' )
  var i5073 = data
  i5072.m_EffectColor = new pc.Color(i5073[0], i5073[1], i5073[2], i5073[3])
  i5072.m_EffectDistance = new pc.Vec2( i5073[4], i5073[5] )
  i5072.m_UseGraphicAlpha = !!i5073[6]
  return i5072
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i5074 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i5075 = data
  var i5077 = i5075[0]
  var i5076 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i5077.length; i += 1) {
    i5076.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i5077[i + 0]));
  }
  i5074.m_Delegates = i5076
  return i5074
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i5080 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i5081 = data
  i5080.eventID = i5081[0]
  i5080.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i5081[1], i5080.callback)
  return i5080
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i5082 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i5083 = data
  i5082.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5083[0], i5082.m_PersistentCalls)
  return i5082
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i5084 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i5085 = data
  i5084.m_EffectColor = new pc.Color(i5085[0], i5085[1], i5085[2], i5085[3])
  i5084.m_EffectDistance = new pc.Vec2( i5085[4], i5085[5] )
  i5084.m_UseGraphicAlpha = !!i5085[6]
  return i5084
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5086 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5087 = data
  request.r(i5087[0], i5087[1], 0, i5086, 'm_FirstSelected')
  i5086.m_sendNavigationEvents = !!i5087[2]
  i5086.m_DragThreshold = i5087[3]
  return i5086
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5088 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5089 = data
  i5088.m_HorizontalAxis = i5089[0]
  i5088.m_VerticalAxis = i5089[1]
  i5088.m_SubmitButton = i5089[2]
  i5088.m_CancelButton = i5089[3]
  i5088.m_InputActionsPerSecond = i5089[4]
  i5088.m_RepeatDelay = i5089[5]
  i5088.m_ForceModuleActive = !!i5089[6]
  i5088.m_SendPointerHoverToParent = !!i5089[7]
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i5091 = data
  i5090.center = new pc.Vec3( i5091[0], i5091[1], i5091[2] )
  i5090.size = new pc.Vec3( i5091[3], i5091[4], i5091[5] )
  i5090.enabled = !!i5091[6]
  i5090.isTrigger = !!i5091[7]
  request.r(i5091[8], i5091[9], 0, i5090, 'material')
  return i5090
}

Deserializers["CameraFollow"] = function (request, data, root) {
  var i5092 = root || request.c( 'CameraFollow' )
  var i5093 = data
  request.r(i5093[0], i5093[1], 0, i5092, 'positionPoint')
  request.r(i5093[2], i5093[3], 0, i5092, 'lookAtPoint')
  request.r(i5093[4], i5093[5], 0, i5092, 'tmpCam')
  request.r(i5093[6], i5093[7], 0, i5092, 'mainCamera')
  i5092.positionVelocity = i5093[8]
  i5092.lookAtVelocity = i5093[9]
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5095 = data
  i5094.enabled = !!i5095[0]
  i5094.aspect = i5095[1]
  i5094.orthographic = !!i5095[2]
  i5094.orthographicSize = i5095[3]
  i5094.backgroundColor = new pc.Color(i5095[4], i5095[5], i5095[6], i5095[7])
  i5094.nearClipPlane = i5095[8]
  i5094.farClipPlane = i5095[9]
  i5094.fieldOfView = i5095[10]
  i5094.depth = i5095[11]
  i5094.clearFlags = i5095[12]
  i5094.cullingMask = i5095[13]
  i5094.rect = i5095[14]
  request.r(i5095[15], i5095[16], 0, i5094, 'targetTexture')
  i5094.usePhysicalProperties = !!i5095[17]
  i5094.focalLength = i5095[18]
  i5094.sensorSize = new pc.Vec2( i5095[19], i5095[20] )
  i5094.lensShift = new pc.Vec2( i5095[21], i5095[22] )
  i5094.gateFit = i5095[23]
  i5094.commandBufferCount = i5095[24]
  i5094.cameraType = i5095[25]
  return i5094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5097 = data
  i5096.ambientIntensity = i5097[0]
  i5096.reflectionIntensity = i5097[1]
  i5096.ambientMode = i5097[2]
  i5096.ambientLight = new pc.Color(i5097[3], i5097[4], i5097[5], i5097[6])
  i5096.ambientSkyColor = new pc.Color(i5097[7], i5097[8], i5097[9], i5097[10])
  i5096.ambientGroundColor = new pc.Color(i5097[11], i5097[12], i5097[13], i5097[14])
  i5096.ambientEquatorColor = new pc.Color(i5097[15], i5097[16], i5097[17], i5097[18])
  i5096.fogColor = new pc.Color(i5097[19], i5097[20], i5097[21], i5097[22])
  i5096.fogEndDistance = i5097[23]
  i5096.fogStartDistance = i5097[24]
  i5096.fogDensity = i5097[25]
  i5096.fog = !!i5097[26]
  request.r(i5097[27], i5097[28], 0, i5096, 'skybox')
  i5096.fogMode = i5097[29]
  var i5099 = i5097[30]
  var i5098 = []
  for(var i = 0; i < i5099.length; i += 1) {
    i5098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5099[i + 0]) );
  }
  i5096.lightmaps = i5098
  i5096.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5097[31], i5096.lightProbes)
  i5096.lightmapsMode = i5097[32]
  i5096.mixedBakeMode = i5097[33]
  i5096.environmentLightingMode = i5097[34]
  i5096.ambientProbe = new pc.SphericalHarmonicsL2(i5097[35])
  i5096.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i5097[36])
  i5096.useReferenceAmbientProbe = !!i5097[37]
  request.r(i5097[38], i5097[39], 0, i5096, 'customReflection')
  request.r(i5097[40], i5097[41], 0, i5096, 'defaultReflection')
  i5096.defaultReflectionMode = i5097[42]
  i5096.defaultReflectionResolution = i5097[43]
  i5096.sunLightObjectId = i5097[44]
  i5096.pixelLightCount = i5097[45]
  i5096.defaultReflectionHDR = !!i5097[46]
  i5096.hasLightDataAsset = !!i5097[47]
  i5096.hasManualGenerate = !!i5097[48]
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5103 = data
  request.r(i5103[0], i5103[1], 0, i5102, 'lightmapColor')
  request.r(i5103[2], i5103[3], 0, i5102, 'lightmapDirection')
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5104 = root || new UnityEngine.LightProbes()
  var i5105 = data
  return i5104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5111 = data
  var i5113 = i5111[0]
  var i5112 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5113.length; i += 1) {
    i5112.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5113[i + 0]));
  }
  i5110.ShaderCompilationErrors = i5112
  i5110.name = i5111[1]
  i5110.guid = i5111[2]
  var i5115 = i5111[3]
  var i5114 = []
  for(var i = 0; i < i5115.length; i += 1) {
    i5114.push( i5115[i + 0] );
  }
  i5110.shaderDefinedKeywords = i5114
  var i5117 = i5111[4]
  var i5116 = []
  for(var i = 0; i < i5117.length; i += 1) {
    i5116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5117[i + 0]) );
  }
  i5110.passes = i5116
  var i5119 = i5111[5]
  var i5118 = []
  for(var i = 0; i < i5119.length; i += 1) {
    i5118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5119[i + 0]) );
  }
  i5110.usePasses = i5118
  var i5121 = i5111[6]
  var i5120 = []
  for(var i = 0; i < i5121.length; i += 1) {
    i5120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5121[i + 0]) );
  }
  i5110.defaultParameterValues = i5120
  request.r(i5111[7], i5111[8], 0, i5110, 'unityFallbackShader')
  i5110.readDepth = !!i5111[9]
  i5110.isCreatedByShaderGraph = !!i5111[10]
  i5110.compiled = !!i5111[11]
  return i5110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5125 = data
  i5124.shaderName = i5125[0]
  i5124.errorMessage = i5125[1]
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5130 = root || new pc.UnityShaderPass()
  var i5131 = data
  i5130.id = i5131[0]
  i5130.subShaderIndex = i5131[1]
  i5130.name = i5131[2]
  i5130.passType = i5131[3]
  i5130.grabPassTextureName = i5131[4]
  i5130.usePass = !!i5131[5]
  i5130.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5131[6], i5130.zTest)
  i5130.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5131[7], i5130.zWrite)
  i5130.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5131[8], i5130.culling)
  i5130.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5131[9], i5130.blending)
  i5130.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5131[10], i5130.alphaBlending)
  i5130.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5131[11], i5130.colorWriteMask)
  i5130.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5131[12], i5130.offsetUnits)
  i5130.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5131[13], i5130.offsetFactor)
  i5130.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5131[14], i5130.stencilRef)
  i5130.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5131[15], i5130.stencilReadMask)
  i5130.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5131[16], i5130.stencilWriteMask)
  i5130.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5131[17], i5130.stencilOp)
  i5130.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5131[18], i5130.stencilOpFront)
  i5130.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5131[19], i5130.stencilOpBack)
  var i5133 = i5131[20]
  var i5132 = []
  for(var i = 0; i < i5133.length; i += 1) {
    i5132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5133[i + 0]) );
  }
  i5130.tags = i5132
  var i5135 = i5131[21]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.push( i5135[i + 0] );
  }
  i5130.passDefinedKeywords = i5134
  var i5137 = i5131[22]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 1) {
    i5136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5137[i + 0]) );
  }
  i5130.passDefinedKeywordGroups = i5136
  var i5139 = i5131[23]
  var i5138 = []
  for(var i = 0; i < i5139.length; i += 1) {
    i5138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5139[i + 0]) );
  }
  i5130.variants = i5138
  var i5141 = i5131[24]
  var i5140 = []
  for(var i = 0; i < i5141.length; i += 1) {
    i5140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5141[i + 0]) );
  }
  i5130.excludedVariants = i5140
  i5130.hasDepthReader = !!i5131[25]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5143 = data
  i5142.val = i5143[0]
  i5142.name = i5143[1]
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5145 = data
  i5144.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5145[0], i5144.src)
  i5144.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5145[1], i5144.dst)
  i5144.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5145[2], i5144.op)
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5147 = data
  i5146.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5147[0], i5146.pass)
  i5146.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5147[1], i5146.fail)
  i5146.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5147[2], i5146.zFail)
  i5146.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5147[3], i5146.comp)
  return i5146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5151 = data
  i5150.name = i5151[0]
  i5150.value = i5151[1]
  return i5150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5155 = data
  var i5157 = i5155[0]
  var i5156 = []
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.push( i5157[i + 0] );
  }
  i5154.keywords = i5156
  i5154.hasDiscard = !!i5155[1]
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5161 = data
  i5160.passId = i5161[0]
  i5160.subShaderIndex = i5161[1]
  var i5163 = i5161[2]
  var i5162 = []
  for(var i = 0; i < i5163.length; i += 1) {
    i5162.push( i5163[i + 0] );
  }
  i5160.keywords = i5162
  i5160.vertexProgram = i5161[3]
  i5160.fragmentProgram = i5161[4]
  i5160.exportedForWebGl2 = !!i5161[5]
  i5160.readDepth = !!i5161[6]
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5167 = data
  request.r(i5167[0], i5167[1], 0, i5166, 'shader')
  i5166.pass = i5167[2]
  return i5166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5171 = data
  i5170.name = i5171[0]
  i5170.type = i5171[1]
  i5170.value = new pc.Vec4( i5171[2], i5171[3], i5171[4], i5171[5] )
  i5170.textureValue = i5171[6]
  i5170.shaderPropertyFlag = i5171[7]
  return i5170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5173 = data
  i5172.name = i5173[0]
  request.r(i5173[1], i5173[2], 0, i5172, 'texture')
  i5172.aabb = i5173[3]
  i5172.vertices = i5173[4]
  i5172.triangles = i5173[5]
  i5172.textureRect = UnityEngine.Rect.MinMaxRect(i5173[6], i5173[7], i5173[8], i5173[9])
  i5172.packedRect = UnityEngine.Rect.MinMaxRect(i5173[10], i5173[11], i5173[12], i5173[13])
  i5172.border = new pc.Vec4( i5173[14], i5173[15], i5173[16], i5173[17] )
  i5172.transparency = i5173[18]
  i5172.bounds = i5173[19]
  i5172.pixelsPerUnit = i5173[20]
  i5172.textureWidth = i5173[21]
  i5172.textureHeight = i5173[22]
  i5172.nativeSize = new pc.Vec2( i5173[23], i5173[24] )
  i5172.pivot = new pc.Vec2( i5173[25], i5173[26] )
  i5172.textureRectOffset = new pc.Vec2( i5173[27], i5173[28] )
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5175 = data
  i5174.name = i5175[0]
  return i5174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5177 = data
  i5176.name = i5177[0]
  i5176.wrapMode = i5177[1]
  i5176.isLooping = !!i5177[2]
  i5176.length = i5177[3]
  var i5179 = i5177[4]
  var i5178 = []
  for(var i = 0; i < i5179.length; i += 1) {
    i5178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5179[i + 0]) );
  }
  i5176.curves = i5178
  var i5181 = i5177[5]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5181[i + 0]) );
  }
  i5176.events = i5180
  i5176.halfPrecision = !!i5177[6]
  i5176._frameRate = i5177[7]
  i5176.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5177[8], i5176.localBounds)
  i5176.hasMuscleCurves = !!i5177[9]
  var i5183 = i5177[10]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.push( i5183[i + 0] );
  }
  i5176.clipMuscleConstant = i5182
  i5176.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5177[11], i5176.clipBindingConstant)
  return i5176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5187 = data
  i5186.path = i5187[0]
  i5186.hash = i5187[1]
  i5186.componentType = i5187[2]
  i5186.property = i5187[3]
  i5186.keys = i5187[4]
  var i5189 = i5187[5]
  var i5188 = []
  for(var i = 0; i < i5189.length; i += 1) {
    i5188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5189[i + 0]) );
  }
  i5186.objectReferenceKeys = i5188
  return i5186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5193 = data
  i5192.time = i5193[0]
  request.r(i5193[1], i5193[2], 0, i5192, 'value')
  return i5192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5197 = data
  i5196.functionName = i5197[0]
  i5196.floatParameter = i5197[1]
  i5196.intParameter = i5197[2]
  i5196.stringParameter = i5197[3]
  request.r(i5197[4], i5197[5], 0, i5196, 'objectReferenceParameter')
  i5196.time = i5197[6]
  return i5196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5199 = data
  i5198.center = new pc.Vec3( i5199[0], i5199[1], i5199[2] )
  i5198.extends = new pc.Vec3( i5199[3], i5199[4], i5199[5] )
  return i5198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5203 = data
  var i5205 = i5203[0]
  var i5204 = []
  for(var i = 0; i < i5205.length; i += 1) {
    i5204.push( i5205[i + 0] );
  }
  i5202.genericBindings = i5204
  var i5207 = i5203[1]
  var i5206 = []
  for(var i = 0; i < i5207.length; i += 1) {
    i5206.push( i5207[i + 0] );
  }
  i5202.pptrCurveMapping = i5206
  return i5202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i5208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i5209 = data
  i5208.name = i5209[0]
  i5208.blendParameter = i5209[1]
  i5208.blendParameterY = i5209[2]
  i5208.blendType = i5209[3]
  var i5211 = i5209[4]
  var i5210 = []
  for(var i = 0; i < i5211.length; i += 1) {
    i5210.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i5211[i + 0]) );
  }
  i5208.children = i5210
  i5208.useAutomaticThresholds = !!i5209[5]
  i5208.minThreshold = i5209[6]
  i5208.maxThreshold = i5209[7]
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i5214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i5215 = data
  request.r(i5215[0], i5215[1], 0, i5214, 'motion')
  i5214.threshold = i5215[2]
  i5214.position = new pc.Vec2( i5215[3], i5215[4] )
  i5214.timeScale = i5215[5]
  i5214.cycleOffset = i5215[6]
  i5214.directBlendParameter = i5215[7]
  i5214.mirror = !!i5215[8]
  return i5214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5217 = data
  i5216.name = i5217[0]
  i5216.ascent = i5217[1]
  i5216.originalLineHeight = i5217[2]
  i5216.fontSize = i5217[3]
  var i5219 = i5217[4]
  var i5218 = []
  for(var i = 0; i < i5219.length; i += 1) {
    i5218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5219[i + 0]) );
  }
  i5216.characterInfo = i5218
  request.r(i5217[5], i5217[6], 0, i5216, 'texture')
  i5216.originalFontSize = i5217[7]
  return i5216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5223 = data
  i5222.index = i5223[0]
  i5222.advance = i5223[1]
  i5222.bearing = i5223[2]
  i5222.glyphWidth = i5223[3]
  i5222.glyphHeight = i5223[4]
  i5222.minX = i5223[5]
  i5222.maxX = i5223[6]
  i5222.minY = i5223[7]
  i5222.maxY = i5223[8]
  i5222.uvBottomLeftX = i5223[9]
  i5222.uvBottomLeftY = i5223[10]
  i5222.uvBottomRightX = i5223[11]
  i5222.uvBottomRightY = i5223[12]
  i5222.uvTopLeftX = i5223[13]
  i5222.uvTopLeftY = i5223[14]
  i5222.uvTopRightX = i5223[15]
  i5222.uvTopRightY = i5223[16]
  return i5222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5225 = data
  i5224.name = i5225[0]
  var i5227 = i5225[1]
  var i5226 = []
  for(var i = 0; i < i5227.length; i += 1) {
    i5226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5227[i + 0]) );
  }
  i5224.layers = i5226
  var i5229 = i5225[2]
  var i5228 = []
  for(var i = 0; i < i5229.length; i += 1) {
    i5228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5229[i + 0]) );
  }
  i5224.parameters = i5228
  i5224.animationClips = i5225[3]
  i5224.avatarUnsupported = i5225[4]
  return i5224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5233 = data
  i5232.name = i5233[0]
  i5232.defaultWeight = i5233[1]
  i5232.blendingMode = i5233[2]
  i5232.avatarMask = i5233[3]
  i5232.syncedLayerIndex = i5233[4]
  i5232.syncedLayerAffectsTiming = !!i5233[5]
  i5232.syncedLayers = i5233[6]
  i5232.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5233[7], i5232.stateMachine)
  return i5232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5235 = data
  i5234.id = i5235[0]
  i5234.name = i5235[1]
  i5234.path = i5235[2]
  var i5237 = i5235[3]
  var i5236 = []
  for(var i = 0; i < i5237.length; i += 1) {
    i5236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5237[i + 0]) );
  }
  i5234.states = i5236
  var i5239 = i5235[4]
  var i5238 = []
  for(var i = 0; i < i5239.length; i += 1) {
    i5238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5239[i + 0]) );
  }
  i5234.machines = i5238
  var i5241 = i5235[5]
  var i5240 = []
  for(var i = 0; i < i5241.length; i += 1) {
    i5240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5241[i + 0]) );
  }
  i5234.entryStateTransitions = i5240
  var i5243 = i5235[6]
  var i5242 = []
  for(var i = 0; i < i5243.length; i += 1) {
    i5242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5243[i + 0]) );
  }
  i5234.exitStateTransitions = i5242
  var i5245 = i5235[7]
  var i5244 = []
  for(var i = 0; i < i5245.length; i += 1) {
    i5244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5245[i + 0]) );
  }
  i5234.anyStateTransitions = i5244
  i5234.defaultStateId = i5235[8]
  return i5234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5249 = data
  i5248.id = i5249[0]
  i5248.name = i5249[1]
  i5248.cycleOffset = i5249[2]
  i5248.cycleOffsetParameter = i5249[3]
  i5248.cycleOffsetParameterActive = !!i5249[4]
  i5248.mirror = !!i5249[5]
  i5248.mirrorParameter = i5249[6]
  i5248.mirrorParameterActive = !!i5249[7]
  i5248.motionId = i5249[8]
  i5248.nameHash = i5249[9]
  i5248.fullPathHash = i5249[10]
  i5248.speed = i5249[11]
  i5248.speedParameter = i5249[12]
  i5248.speedParameterActive = !!i5249[13]
  i5248.tag = i5249[14]
  i5248.tagHash = i5249[15]
  i5248.writeDefaultValues = !!i5249[16]
  var i5251 = i5249[17]
  var i5250 = []
  for(var i = 0; i < i5251.length; i += 2) {
  request.r(i5251[i + 0], i5251[i + 1], 2, i5250, '')
  }
  i5248.behaviours = i5250
  var i5253 = i5249[18]
  var i5252 = []
  for(var i = 0; i < i5253.length; i += 1) {
    i5252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5253[i + 0]) );
  }
  i5248.transitions = i5252
  return i5248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5259 = data
  i5258.fullPath = i5259[0]
  i5258.canTransitionToSelf = !!i5259[1]
  i5258.duration = i5259[2]
  i5258.exitTime = i5259[3]
  i5258.hasExitTime = !!i5259[4]
  i5258.hasFixedDuration = !!i5259[5]
  i5258.interruptionSource = i5259[6]
  i5258.offset = i5259[7]
  i5258.orderedInterruption = !!i5259[8]
  i5258.destinationStateId = i5259[9]
  i5258.isExit = !!i5259[10]
  i5258.mute = !!i5259[11]
  i5258.solo = !!i5259[12]
  var i5261 = i5259[13]
  var i5260 = []
  for(var i = 0; i < i5261.length; i += 1) {
    i5260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5261[i + 0]) );
  }
  i5258.conditions = i5260
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5265 = data
  i5264.mode = i5265[0]
  i5264.parameter = i5265[1]
  i5264.threshold = i5265[2]
  return i5264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5271 = data
  i5270.destinationStateId = i5271[0]
  i5270.isExit = !!i5271[1]
  i5270.mute = !!i5271[2]
  i5270.solo = !!i5271[3]
  var i5273 = i5271[4]
  var i5272 = []
  for(var i = 0; i < i5273.length; i += 1) {
    i5272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5273[i + 0]) );
  }
  i5270.conditions = i5272
  return i5270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5277 = data
  i5276.defaultBool = !!i5277[0]
  i5276.defaultFloat = i5277[1]
  i5276.defaultInt = i5277[2]
  i5276.name = i5277[3]
  i5276.nameHash = i5277[4]
  i5276.type = i5277[5]
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5279 = data
  var i5281 = i5279[0]
  var i5280 = []
  for(var i = 0; i < i5281.length; i += 1) {
    i5280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5281[i + 0]) );
  }
  i5278.files = i5280
  i5278.componentToPrefabIds = i5279[1]
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5285 = data
  i5284.path = i5285[0]
  request.r(i5285[1], i5285[2], 0, i5284, 'unityObject')
  return i5284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5287 = data
  var i5289 = i5287[0]
  var i5288 = []
  for(var i = 0; i < i5289.length; i += 1) {
    i5288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5289[i + 0]) );
  }
  i5286.scriptsExecutionOrder = i5288
  var i5291 = i5287[1]
  var i5290 = []
  for(var i = 0; i < i5291.length; i += 1) {
    i5290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5291[i + 0]) );
  }
  i5286.sortingLayers = i5290
  var i5293 = i5287[2]
  var i5292 = []
  for(var i = 0; i < i5293.length; i += 1) {
    i5292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5293[i + 0]) );
  }
  i5286.cullingLayers = i5292
  i5286.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5287[3], i5286.timeSettings)
  i5286.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5287[4], i5286.physicsSettings)
  i5286.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5287[5], i5286.physics2DSettings)
  i5286.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5287[6], i5286.qualitySettings)
  i5286.enableRealtimeShadows = !!i5287[7]
  i5286.enableAutoInstancing = !!i5287[8]
  i5286.enableDynamicBatching = !!i5287[9]
  i5286.lightmapEncodingQuality = i5287[10]
  i5286.desiredColorSpace = i5287[11]
  var i5295 = i5287[12]
  var i5294 = []
  for(var i = 0; i < i5295.length; i += 1) {
    i5294.push( i5295[i + 0] );
  }
  i5286.allTags = i5294
  return i5286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5299 = data
  i5298.name = i5299[0]
  i5298.value = i5299[1]
  return i5298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5303 = data
  i5302.id = i5303[0]
  i5302.name = i5303[1]
  i5302.value = i5303[2]
  return i5302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5307 = data
  i5306.id = i5307[0]
  i5306.name = i5307[1]
  return i5306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5309 = data
  i5308.fixedDeltaTime = i5309[0]
  i5308.maximumDeltaTime = i5309[1]
  i5308.timeScale = i5309[2]
  i5308.maximumParticleTimestep = i5309[3]
  return i5308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5311 = data
  i5310.gravity = new pc.Vec3( i5311[0], i5311[1], i5311[2] )
  i5310.defaultSolverIterations = i5311[3]
  i5310.bounceThreshold = i5311[4]
  i5310.autoSyncTransforms = !!i5311[5]
  i5310.autoSimulation = !!i5311[6]
  var i5313 = i5311[7]
  var i5312 = []
  for(var i = 0; i < i5313.length; i += 1) {
    i5312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5313[i + 0]) );
  }
  i5310.collisionMatrix = i5312
  return i5310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5317 = data
  i5316.enabled = !!i5317[0]
  i5316.layerId = i5317[1]
  i5316.otherLayerId = i5317[2]
  return i5316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5319 = data
  request.r(i5319[0], i5319[1], 0, i5318, 'material')
  i5318.gravity = new pc.Vec2( i5319[2], i5319[3] )
  i5318.positionIterations = i5319[4]
  i5318.velocityIterations = i5319[5]
  i5318.velocityThreshold = i5319[6]
  i5318.maxLinearCorrection = i5319[7]
  i5318.maxAngularCorrection = i5319[8]
  i5318.maxTranslationSpeed = i5319[9]
  i5318.maxRotationSpeed = i5319[10]
  i5318.baumgarteScale = i5319[11]
  i5318.baumgarteTOIScale = i5319[12]
  i5318.timeToSleep = i5319[13]
  i5318.linearSleepTolerance = i5319[14]
  i5318.angularSleepTolerance = i5319[15]
  i5318.defaultContactOffset = i5319[16]
  i5318.autoSimulation = !!i5319[17]
  i5318.queriesHitTriggers = !!i5319[18]
  i5318.queriesStartInColliders = !!i5319[19]
  i5318.callbacksOnDisable = !!i5319[20]
  i5318.reuseCollisionCallbacks = !!i5319[21]
  i5318.autoSyncTransforms = !!i5319[22]
  var i5321 = i5319[23]
  var i5320 = []
  for(var i = 0; i < i5321.length; i += 1) {
    i5320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5321[i + 0]) );
  }
  i5318.collisionMatrix = i5320
  return i5318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5325 = data
  i5324.enabled = !!i5325[0]
  i5324.layerId = i5325[1]
  i5324.otherLayerId = i5325[2]
  return i5324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5327 = data
  var i5329 = i5327[0]
  var i5328 = []
  for(var i = 0; i < i5329.length; i += 1) {
    i5328.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5329[i + 0]) );
  }
  i5326.qualityLevels = i5328
  var i5331 = i5327[1]
  var i5330 = []
  for(var i = 0; i < i5331.length; i += 1) {
    i5330.push( i5331[i + 0] );
  }
  i5326.names = i5330
  i5326.shadows = i5327[2]
  i5326.anisotropicFiltering = i5327[3]
  i5326.antiAliasing = i5327[4]
  i5326.lodBias = i5327[5]
  i5326.shadowCascades = i5327[6]
  i5326.shadowDistance = i5327[7]
  i5326.shadowmaskMode = i5327[8]
  i5326.shadowProjection = i5327[9]
  i5326.shadowResolution = i5327[10]
  i5326.softParticles = !!i5327[11]
  i5326.softVegetation = !!i5327[12]
  i5326.activeColorSpace = i5327[13]
  i5326.desiredColorSpace = i5327[14]
  i5326.masterTextureLimit = i5327[15]
  i5326.maxQueuedFrames = i5327[16]
  i5326.particleRaycastBudget = i5327[17]
  i5326.pixelLightCount = i5327[18]
  i5326.realtimeReflectionProbes = !!i5327[19]
  i5326.shadowCascade2Split = i5327[20]
  i5326.shadowCascade4Split = new pc.Vec3( i5327[21], i5327[22], i5327[23] )
  i5326.streamingMipmapsActive = !!i5327[24]
  i5326.vSyncCount = i5327[25]
  i5326.asyncUploadBufferSize = i5327[26]
  i5326.asyncUploadTimeSlice = i5327[27]
  i5326.billboardsFaceCameraPosition = !!i5327[28]
  i5326.shadowNearPlaneOffset = i5327[29]
  i5326.streamingMipmapsMemoryBudget = i5327[30]
  i5326.maximumLODLevel = i5327[31]
  i5326.streamingMipmapsAddAllCameras = !!i5327[32]
  i5326.streamingMipmapsMaxLevelReduction = i5327[33]
  i5326.streamingMipmapsRenderersPerFrame = i5327[34]
  i5326.resolutionScalingFixedDPIFactor = i5327[35]
  i5326.streamingMipmapsMaxFileIORequests = i5327[36]
  i5326.currentQualityLevel = i5327[37]
  return i5326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i5334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i5335 = data
  i5334.name = i5335[0]
  var i5337 = i5335[1]
  var i5336 = []
  for(var i = 0; i < i5337.length; i += 1) {
    i5336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i5337[i + 0]) );
  }
  i5334.tos = i5336
  var i5339 = i5335[2]
  var i5338 = []
  for(var i = 0; i < i5339.length; i += 1) {
    i5338.push( i5339[i + 0] );
  }
  i5334.constant = i5338
  i5334.isValid = !!i5335[3]
  i5334.isHuman = !!i5335[4]
  i5334.hasRootMotion = !!i5335[5]
  return i5334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i5342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i5343 = data
  i5342.hash = i5343[0]
  i5342.path = i5343[1]
  return i5342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5347 = data
  i5346.weight = i5347[0]
  i5346.vertices = i5347[1]
  i5346.normals = i5347[2]
  i5346.tangents = i5347[3]
  return i5346
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[3],"57":[46],"58":[12],"59":[12],"60":[12],"61":[12],"62":[12],"63":[12],"64":[12],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[46],"80":[23],"81":[82],"83":[82],"29":[28],"84":[85],"86":[85],"87":[28],"88":[28],"32":[29],"34":[33,28],"89":[28],"31":[29],"90":[28],"91":[28],"92":[28],"93":[28],"94":[28],"95":[28],"96":[28],"97":[28],"98":[28],"99":[33,28],"100":[28],"101":[28],"102":[28],"103":[28],"38":[33,28],"104":[28],"105":[43],"106":[43],"44":[43],"107":[43],"108":[46],"109":[46],"110":[85]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Shader","UnityEngine.Texture2D","UnityEditor.Animations.AnimatorController","UnityEngine.MonoBehaviour","SpiderController","mvSpringRope","UnityEngine.Rigidbody","UnityEngine.CapsuleCollider","SpiderFly","UnityEngine.ParticleSystem","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.TrailRenderer","UnityEngine.ParticleSystemRenderer","UnityEngine.LineRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","UnityEngine.Cubemap","GameManagerSwing","CameraFollow","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","ButtonHook","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Outline","UnityEngine.EventSystems.EventTrigger","UnityEngine.UI.Shadow","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.BoxCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.AnimationClip","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine"]

Deserializers.unityVersion = "2022.3.53f1";

Deserializers.productName = "SF_Playable1";

Deserializers.lunaInitializationTime = "02/28/2025 02:31:19";

Deserializers.lunaDaysRunning = "0.3";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "spider_swing1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1553";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3289";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

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

Deserializers.buildID = "e5a261eb-59c4-4350-acd4-d99d3a3c94f7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

