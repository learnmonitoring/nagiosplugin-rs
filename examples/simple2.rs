use std::env;
use std::env::args;
use std::process;
use nagiosplugin::{Resource, State};

// Usage: cargo run --example simple2 -- haaa
//        cargo run --example simple2 -- itsfine

fn main() {
//   let args: Vec<_> = env::args().collect();
//    if args.len() < 1 {
//        println!("Need at least one argument is {}", args[1]);
//    }

//   for argument in env::args() {
//        if argument == "--help" {
//            println!("You passed --help as one of the arguments!");
//        }
//    }

    let arguments: Vec<String> = env::args().collect();

    if arguments.len() < 2 {
        println!("0 Argument passwd. Need at least one argument is\n");
        println!("Ex: simple2 {{haaa|itsfine}} \n");
        process::exit(1);
    }


    // Grab the first argument
    let arg = args().nth(1).expect("provide an argument");


    // Create a default resource: state is unknown, description is empty
    let mut resource = Resource::new(None, None);

    // Check logic goes here
    match arg.as_ref() {
        "itsfine" => {
            resource.set_state(State::Ok);
            resource.set_description("Eveything is fine :-)");
        }
        "haaa" => {
            resource.set_state(State::Critical);
            resource.set_description("Something went terribly wrong!");
        }
        _ => (), // unexpected argument: the state will remain unknown
    };

    // print the status based on `state` and `description`
    // then exists with appropriate exit code
    resource.print_and_exit();
}
