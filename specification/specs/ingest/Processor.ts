@class_serializer("ProcessorFormatter")
class Processor {
	if: string;
	ignore_failure: boolean;
	name: string;
	on_failure: Processor[];
	tag: string;
}
