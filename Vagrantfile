# -*- mode: ruby -*-
# vi: set ft=ruby :

VMname = File.basename(Dir.getwd) + "-vagrant"

Vagrant.configure("2") do |config|

    config.vm.box = "ubuntu/trusty64"

    config.vm.network "forwarded_port", guest: 80, host: 8000

    config.vm.synced_folder "./", "/opt/track-api/",
        owner: "vagrant",
        group: "www-data",
        mount_options: ["dmode=775,fmode=664"]

    config.vm.provider "virtualbox" do |vb|
        vb.memory = 1024
        vb.cpus   = 2
        vb.name   = "#{VMname}"

        # see http://datasift.github.io/storyplayer/v2/tips/vagrant/speed-up-virtualbox.html
        # change the network card hardware for better performance
        vb.customize ["modifyvm", :id, "--nictype1", "virtio" ]
        vb.customize ["modifyvm", :id, "--nictype2", "virtio" ]

        # suggested fix for slow network performance
        # see https://github.com/mitchellh/vagrant/issues/1807
        vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
        vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
    end

    config.vm.define "#{VMname}" do |vb|
    end

    $script = <<-SCRIPT
        curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
        sudo apt update

        sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password password root'
        sudo debconf-set-selections <<< 'mysql-server mysql-server/root_password_again password root'

        sudo apt install -y mysql-server mysql-client nodejs redis-server build-essential

        sudo npm install -g knex node-gyp

        mysql -e "CREATE DATABASE track CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci" -uroot -proot
    SCRIPT

    config.vm.provision "shell", inline: $script, privileged: false

end
