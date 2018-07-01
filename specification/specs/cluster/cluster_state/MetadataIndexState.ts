class MetadataIndexState {
	state: string;
	settings: string[];
	mappings: Map<TypeName, TypeMapping>;
	aliases: string[];
}
