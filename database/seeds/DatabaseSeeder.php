<?php

use App\clients;
use App\items;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Model::unguard();
        // $this->call(UsersTableSeeder::class);
        $this->call('ItemsTableSeeder');
        $this->call('ClientsTableSeeder');
        $this->call('UsersTableSeeder');
        Model::reguard();
    }
}
