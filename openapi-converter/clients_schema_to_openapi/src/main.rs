fn main() {
    clients_schema_to_openapi::convert_schema(
        "../../elasticsearch-specification/output/schema/schema.json",
        std::io::stdout()
    ).unwrap();

}
