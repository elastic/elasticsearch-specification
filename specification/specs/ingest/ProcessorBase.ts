class ProcessorBase implements IProcessor {
	if: string;
	ignore_failure: boolean;
	on_failure: IProcessor[];
	tag: string;
}
