use std::path::PathBuf;
use argh::FromArgs;
use clients_schema::Flavor;
use crate::Configuration;

/// Convert schema.json to an OpenAPI schema
#[derive(Debug, FromArgs)]
pub struct Cli {
    /// schema file to transform.
    #[argh(option)]
    pub schema: PathBuf,

    /// output file.
    #[argh(option)]
    pub output: PathBuf,

    //---- Fields from lib::Configuration

    /// the flavor to generate [all, stack, serverless - default = all]
    #[argh(option, default = "SchemaFlavor::All")]
    pub flavor: SchemaFlavor,

    /// generate only this namespace (can be repeated)
    #[argh(option)]
    pub namespace: Vec<String>,

    /// the branch to generate [9.0, 8.19, current, etc... - default = current]
    #[argh(option)]
    pub branch: Option<String>,

    /// add enum descriptions to property descriptions [default = true]
    #[argh(switch)]
    pub lift_enum_descriptions: bool,

    /// include the x-codeSamples extension with language examples for all endpoints
    #[argh(switch)]
    pub include_language_examples: bool,
}

use derive_more::FromStr;

#[derive(Debug, Clone, PartialEq, FromStr)]
pub enum SchemaFlavor {
    /// No schema filtering
    All,
    /// Stack (stateful) flavor
    Stack,
    /// Serverless flavor
    Serverless,
}

impl From<Cli> for Configuration {
    fn from(cli: Cli) -> Configuration {
        let flavor = match cli.flavor {
            SchemaFlavor::All => None,
            SchemaFlavor::Serverless => Some(Flavor::Serverless),
            SchemaFlavor::Stack => Some(Flavor::Stack),
        };
        
        let branch = cli.branch;

        Configuration {
            flavor,
            branch,
            lift_enum_descriptions: cli.lift_enum_descriptions,
            include_language_examples: cli.include_language_examples,
            namespaces: if cli.namespace.is_empty() {
                None
            } else {
                Some(cli.namespace)
            },
        }
    }
}
