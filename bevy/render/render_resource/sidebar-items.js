initSidebarItems({"derive":[["AsBindGroup",""],["ShaderType",""]],"enum":[["AddressMode","How edges should be handled in texture addressing."],["AsBindGroupError","An error that occurs during [`AsBindGroup::as_bind_group`] calls."],["AsModuleDescriptorError",""],["BindingResource","Resource that can be bound to a pipeline."],["BindingType","Specific type of a binding."],["BlendFactor","Alpha blend factor."],["BlendOperation","Alpha blend operation."],["BufferBindingType","Specific type of a buffer binding."],["CachedPipelineState",""],["CompareFunction","Comparison function used for depth and stencil operations."],["Face","Face of a vertex."],["FilterMode","Texel mixing mode when sampling between texels."],["FrontFace","Vertex winding order which classifies the “front” face of a triangle."],["IndexFormat","Format of indices used with pipeline."],["LoadOp","Operation to perform to the output attachment at the start of a renderpass."],["MapMode","Type of buffer mapping."],["OwnedBindingResource","An owned binding resource of any type (ex: a [`Buffer`], [`TextureView`], etc). This is used by types like [`PreparedBindGroup`] to hold a single list of all render resources used by bindings."],["Pipeline",""],["PipelineCacheError",""],["PolygonMode","Type of drawing mode for polygons"],["PrimitiveTopology","Primitive type the input mesh is composed of."],["ProcessShaderError",""],["ProcessedShader","A processed [Shader]. This cannot contain preprocessor directions. It must be “ready to compile”"],["SamplerBindingType","Specific type of a sampler binding."],["ShaderImport",""],["ShaderRef","A reference to a shader asset."],["ShaderReflectError",""],["ShaderSource","Source of a shader module."],["ShaderStage","Stage of the programmable pipeline."],["Source",""],["SpecializedMeshPipelineError",""],["StencilOperation","Operation to perform on the stencil value."],["StorageTextureAccess","Specific type of a sample in a texture binding."],["TextureAspect","Kind of data the texture holds."],["TextureDimension","Dimensionality of a texture."],["TextureFormat","Underlying texture data format."],["TextureSampleType","Specific type of a sample in a texture binding."],["TextureViewDimension","Dimensions of a particular texture view."],["TextureViewValue","This type combines wgpu’s `TextureView` and `SurfaceTexture` into the same interface."],["VertexFormat","Vertex Format for a [`VertexAttribute`] (input)."],["VertexStepMode","Whether a vertex buffer is indexed by vertex or by instance."]],"mod":[["encase",""]],"static":[["SHADER_IMPORT_PROCESSOR",""]],"struct":[["BindGroup","Bind groups are responsible for binding render resources (e.g. buffers, textures, samplers) to a `TrackedRenderPass`. This makes them accessible in the pipeline (shaders) as uniforms."],["BindGroupDescriptor","Describes a group of bindings and the resources to be bound."],["BindGroupEntry","An element of a [`BindGroupDescriptor`], consisting of a bindable resource and the slot to bind it to."],["BindGroupId","A [`BindGroup`] identifier."],["BindGroupLayout",""],["BindGroupLayoutDescriptor","Describes a [`BindGroupLayout`]."],["BindGroupLayoutEntry","Describes a single binding inside a bind group."],["BindGroupLayoutId",""],["BlendComponent","Describes a blend component of a [`BlendState`]."],["BlendState","Describe the blend state of a render pipeline, within [`ColorTargetState`]."],["Buffer",""],["BufferBinding","Describes the segment of a buffer to bind."],["BufferId",""],["BufferInitDescriptor","Describes a Buffer when allocating."],["BufferSlice",""],["BufferUsages","Different ways that you can use a buffer."],["BufferVec","A structure for storing raw bytes that have already been properly formatted for use by the GPU."],["CachedComputePipelineId",""],["CachedRenderPipelineId",""],["ColorTargetState","Describes the color state of a render pipeline."],["ColorWrites","Color write mask. Disabled color channels will not be written to."],["CommandEncoder","Encodes a series of GPU operations."],["ComputePass","In-progress recording of a compute pass."],["ComputePassDescriptor","Describes the attachments of a compute pass."],["ComputePipeline","A [`ComputePipeline`] represents a compute pipeline and its single shader stage."],["ComputePipelineDescriptor","Describes a compute pipeline."],["ComputePipelineId","A [`ComputePipeline`] identifier."],["DepthBiasState","Describes the biasing setting for the depth target."],["DepthStencilState","Describes the depth/stencil state in a render pipeline."],["DynamicStorageBuffer","Stores data to be transferred to the GPU and made accessible to shaders as a dynamic storage buffer."],["DynamicUniformBuffer","Stores data to be transferred to the GPU and made accessible to shaders as a dynamic uniform buffer."],["Extent3d","Extent of a texture related operation."],["FragmentState","Describes the fragment process in a render pipeline."],["ImageCopyBufferBase","View of a buffer which can be used to copy to/from a texture."],["ImageCopyTextureBase","View of a texture which can be used to copy to/from a buffer/texture."],["ImageDataLayout","Layout of a texture in a buffer’s memory."],["ImageSubresourceRange","Subresource range within an image"],["MultisampleState","Describes the multi-sampling state of a render pipeline."],["Operations","Pair of load and store operations for an attachment aspect."],["Origin3d","Origin of a copy to/from a texture."],["PipelineCache",""],["PipelineLayout","Handle to a pipeline layout."],["PipelineLayoutDescriptor","Describes a [`PipelineLayout`]."],["PreparedBindGroup","A prepared bind group returned as a result of [`AsBindGroup::as_bind_group`]."],["PrimitiveState","Describes the state of primitive assembly and rasterization in a render pipeline."],["RawComputePipelineDescriptor","Describes a compute pipeline."],["RawFragmentState","Describes the fragment processing in a render pipeline."],["RawRenderPipelineDescriptor","Describes a render (graphics) pipeline."],["RawVertexBufferLayout","Describes how the vertex buffer is interpreted."],["RawVertexState","Describes the vertex processing in a render pipeline."],["RenderPassColorAttachment","Describes a color attachment to a [`RenderPass`]."],["RenderPassDepthStencilAttachment","Describes a depth/stencil attachment to a [`RenderPass`]."],["RenderPassDescriptor","Describes the attachments of a render pass."],["RenderPipeline","A [`RenderPipeline`] represents a graphics pipeline and its stages (shaders), bindings and vertex buffers."],["RenderPipelineDescriptor","Describes a render (graphics) pipeline."],["RenderPipelineId","A [`RenderPipeline`] identifier."],["Sampler","A Sampler defines how a pipeline will sample from a [`TextureView`]. They define image filters (including anisotropy) and address (wrapping) modes, among other things."],["SamplerDescriptor","Describes a [`Sampler`]."],["SamplerId","A [`Sampler`] identifier."],["Shader","A shader, as defined by its [`ShaderSource`] and `ShaderStage` This is an “unprocessed” shader. It can contain preprocessor directives."],["ShaderId",""],["ShaderImportProcessor",""],["ShaderImports",""],["ShaderLoader",""],["ShaderModule","Handle to a compiled shader module."],["ShaderModuleDescriptor","Descriptor for use with [`Device::create_shader_module`]."],["ShaderProcessor",""],["ShaderReflection",""],["ShaderStages","Describes the shader stages that a binding will be visible from."],["SpecializedComputePipelines",""],["SpecializedMeshPipelines",""],["SpecializedRenderPipelines",""],["StencilFaceState","Describes stencil state in a render pipeline."],["StencilState","State of the stencil operation (fixed-pipeline stage)."],["StorageBuffer","Stores data to be transferred to the GPU and made accessible to shaders as a storage buffer."],["Texture","A GPU-accessible texture."],["TextureId","A [`Texture`] identifier."],["TextureUsages","Different ways that you can use a texture."],["TextureView","Describes a [`Texture`] with its associated metadata required by a pipeline or `BindGroup`."],["TextureViewDescriptor","Describes a [`TextureView`]."],["TextureViewId","A [`TextureView`] identifier."],["UniformBuffer","Stores data to be transferred to the GPU and made accessible to shaders as a uniform buffer."],["VertexAttribute","Vertex inputs (attributes) to shaders."],["VertexBufferLayout","Describes how the vertex buffer is interpreted."],["VertexState",""],["WgpuAdapterInfo","Information about an adapter."],["WgpuFeatures","Features that are not guaranteed to be supported."],["WgpuLimits","Represents the sets of limits an adapter/device supports."]],"trait":[["AsBindGroup","Converts a value to a [`BindGroup`] with a given [`BindGroupLayout`], which can then be used in Bevy shaders. This trait can be derived (and generally should be). Read on for details and examples."],["AsBindGroupShaderType","Converts a value to a [`ShaderType`] for use in a bind group. This is automatically implemented for references that implement [`Into`]. Generally normal [`Into`] / [`From`] impls should be preferred, but sometimes additional runtime metadata is required. This exists largely to make some [`AsBindGroup`] use cases easier."],["ShaderSize","Trait implemented for all WGSL fixed-footprint types"],["ShaderType","Base trait for all WGSL host-shareable types"],["SpecializedComputePipeline",""],["SpecializedMeshPipeline",""],["SpecializedRenderPipeline",""]],"type":[["BufferAddress","Integral type used for buffer offsets."],["BufferDescriptor","Describes a [`Buffer`]."],["BufferSize","Integral type used for buffer slice sizes."],["CommandEncoderDescriptor","Describes a [`CommandEncoder`]."],["ImageCopyBuffer","View of a buffer which can be used to copy to/from a texture."],["ImageCopyTexture","View of a texture which can be used to copy to/from a buffer/texture."],["TextureDescriptor","Describes a [`Texture`]."]]});