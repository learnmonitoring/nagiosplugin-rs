var searchIndex = {};
searchIndex["nagiosplugin"] = {"doc":"The nagiosplugin crate provides some basic utilities to make it easier to write nagios checks.","items":[[3,"Resource","nagiosplugin","A Resource basically represents a single service if you view it from the perspective of nagios. If you init it without a state it will determine one from the given metrics.",null,null],[3,"PartialOrdMetric","","A PartialOrdMetric is a metric which will automatically calculate the State based on the given value and warning and/or critical value.",null,null],[3,"SimpleMetric","","Represents a simple metric where no logic is performed. You give some values in and the same get out.",null,null],[4,"State","","Represents a service state from nagios.",null,null],[13,"Ok","","",0,null],[13,"Warning","","",0,null],[13,"Critical","","",0,null],[13,"Unknown","","",0,null],[8,"ResourceMetric","","Represents a single metric of a resource. You shouldn't need to implement this by yourself since the crate provided types already implement this.",null,null],[10,"perf_string","","",1,{"i":[{"n":"self"}],"o":{"n":"string"}}],[10,"name","","",1,{"i":[{"n":"self"}],"o":{"n":"str"}}],[10,"state","","",1,{"i":[{"n":"self"}],"o":{"g":["state"],"n":"option"}}],[8,"ToPerfString","","The purpose of ToPerfString is only so one can define custom representations of custom types without using the ToString trait so we don't interfere with that.",null,null],[10,"to_perf_string","","",2,{"i":[{"n":"self"}],"o":{"n":"string"}}],[8,"Metric","","This trait can be implemented for any kind of metric and will be used to generate the final string output for nagios. Calls to the functions should return immediately and not query the service every time.",null,null],[16,"Output","","",3,null],[10,"name","","",3,{"i":[{"n":"self"}],"o":{"n":"str"}}],[10,"state","","",3,{"i":[{"n":"self"}],"o":{"g":["state"],"n":"option"}}],[10,"value","","",3,null],[10,"warning","","",3,{"i":[{"n":"self"}],"o":{"n":"option"}}],[10,"critical","","",3,{"i":[{"n":"self"}],"o":{"n":"option"}}],[10,"min","","",3,{"i":[{"n":"self"}],"o":{"n":"option"}}],[10,"max","","",3,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"new","","If state is set to Some(State) then it will always use this instead of determining it from the given metrics.",4,{"i":[{"g":["state"],"n":"option"},{"g":["str"],"n":"option"}],"o":{"n":"resource"}}],[11,"push","","Pushes a single ResourceMetric into the resource.",4,{"i":[{"n":"self"},{"n":"m"}]}],[11,"metrics","","Returns a slice of the pushed metrics.",4,null],[11,"set_state","","",4,{"i":[{"n":"self"},{"n":"state"}]}],[11,"to_nagios_string","","Returns a string which nagios understands to determine the service state.",4,{"i":[{"n":"self"}],"o":{"n":"string"}}],[11,"get_state","","Will determine a State by the given metrics.",4,{"i":[{"n":"self"}],"o":{"n":"state"}}],[11,"get_description","","Get the description of this resource.",4,{"i":[{"n":"self"}],"o":{"g":["string"],"n":"option"}}],[11,"set_description","","Set the description of this resource.",4,{"i":[{"n":"self"},{"n":"str"}]}],[11,"exit_code","","Will return the exit code of the determined state via Self::state.",4,{"i":[{"n":"self"}],"o":{"n":"i32"}}],[11,"print_and_exit","","Will print Self::to_nagios_string and exit with the exit code from Self::exit_code",4,{"i":[{"n":"self"}]}],[11,"default","","",4,{"o":{"n":"self"}}],[11,"clone","","",0,{"i":[{"n":"self"}],"o":{"n":"state"}}],[11,"fmt","","",0,{"i":[{"n":"self"},{"n":"formatter"}],"o":{"n":"result"}}],[11,"eq","","",0,{"i":[{"n":"self"},{"n":"state"}],"o":{"n":"bool"}}],[11,"exit_code","","Returns the corresponding nagios exit code to signal the service state of self.",0,{"i":[{"n":"self"}],"o":{"n":"i32"}}],[11,"to_string","","",0,{"i":[{"n":"self"}],"o":{"n":"string"}}],[11,"partial_cmp","","",0,{"i":[{"n":"self"},{"n":"state"}],"o":{"g":["ordering"],"n":"option"}}],[11,"new","","",5,{"i":[{"n":"str"},{"n":"t"},{"n":"option"},{"n":"option"},{"n":"option"},{"n":"option"},{"n":"bool"}],"o":{"n":"self"}}],[11,"name","","",5,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"state","","",5,{"i":[{"n":"self"}],"o":{"g":["state"],"n":"option"}}],[11,"value","","",5,null],[11,"warning","","",5,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"critical","","",5,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"min","","",5,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"max","","",5,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"clone","","",6,{"i":[{"n":"self"}],"o":{"n":"simplemetric"}}],[11,"new","","",6,{"i":[{"n":"str"},{"g":["state"],"n":"option"},{"n":"t"},{"n":"option"},{"n":"option"},{"n":"option"},{"n":"option"}],"o":{"n":"self"}}],[11,"name","","",6,{"i":[{"n":"self"}],"o":{"n":"str"}}],[11,"state","","",6,{"i":[{"n":"self"}],"o":{"g":["state"],"n":"option"}}],[11,"value","","",6,null],[11,"warning","","",6,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"critical","","",6,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"min","","",6,{"i":[{"n":"self"}],"o":{"n":"option"}}],[11,"max","","",6,{"i":[{"n":"self"}],"o":{"n":"option"}}],[14,"resource","","Let's you simply create a resource from multiple metrics. It's a bit like the vec! macro. `rust # #[macro_use] # extern crate nagiosplugin; # # use nagiosplugin::{SimpleMetric, State}; # # fn main() { let m1 = SimpleMetric::new(\"test\", Some(State::Ok), 12, None, None, None, None); let m2 = SimpleMetric::new(\"other\", None, true, None, None, None, None); let resource = resource![m1, m2]; # }`",null,null]],"paths":[[4,"State"],[8,"ResourceMetric"],[8,"ToPerfString"],[8,"Metric"],[3,"Resource"],[3,"PartialOrdMetric"],[3,"SimpleMetric"]]};
initSearch(searchIndex);
