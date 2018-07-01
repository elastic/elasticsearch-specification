@class_serializer("PipelineJsonConverter")
class Pipeline {
	description: string;
	processors: Processor[];
	on_failure: Processor[];
}
