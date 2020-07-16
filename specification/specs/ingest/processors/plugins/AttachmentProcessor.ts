class AttachmentProcessor extends ProcessorBase {
	field: Field;
	ignore_missing: boolean;
	indexed_chars: long;
	indexed_chars_field: Field;
	properties: string[];
	target_field: Field;
}
