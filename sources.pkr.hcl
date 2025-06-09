data "amazon-ami" "1.30" {}

source_ami = data.amazon-ami.1.30.id
