interface IProcessor {
	if: string;
	ignore_failure: boolean;
	name: string;
	on_failure: IProcessor[];
	tag: string;
}
