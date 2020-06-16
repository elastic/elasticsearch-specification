@class_serializer("ProcessorFormatter")
class Processor {
	name: string;
	on_failure: Processor[];
	if: string;
	tag: string;
	ignore_failure: boolean;
}
