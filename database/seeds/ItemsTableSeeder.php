// /database/migrations/seeds/ProjectsTableSeeder.php
<?php
 
use Illuminate\Database\Seeder;
 
class ItemsTableSeeder extends Seeder {
 
    public function run()
    {
        try {
        DB::beginTransaction();
        DB::statement('SET IDENTITY_INSERT products ON;');
        // Uncomment the below to wipe the table clean before populating
        DB::table('products')->delete();
 
        $products = array(
            ['name' => 'TradeSync Web', 'description' => 'TW SalesForce Web',  'client_id' => 1, 'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['name' => 'TradeSync Mobile', 'description' => 'TW SalesForce Mobile',  'client_id' => 3,  'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['name' => 'TradeSync', 'description' => 'TW Suite',  'client_id' => 2, 'created_at' => new DateTime, 'updated_at' => new DateTime],
        );
 
        // Uncomment the below to run the seeder
        DB::table('products')->insert($products);
        DB::commit();
        //DB::statement('SET IDENTITY_INSERT products OFF;');
        }
        catch(Exception $e) {
            DB::rollback();
        }
    }
 
}
 

 
class ClientsTableSeeder extends Seeder {
 
    public function run()
    {
        try {
        DB::beginTransaction();
        DB::statement('SET IDENTITY_INSERT clients ON;');
        // Uncomment the below to wipe the table clean before populating
        DB::table('clients')->delete();
 
        $clients = array(
            ['name' => 'TFC', 'email' => 'sales@tfc.com.ng',  'questionno' => '1', 'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['name' => 'CR', 'email' => 'sales@cr.com.ng',  'questionno' => '2', 'created_at' => new DateTime, 'updated_at' => new DateTime],
            ['name' => 'KFC', 'email' => 'sales@kfc.io',  'questionno' => '3', 'created_at' => new DateTime, 'updated_at' => new DateTime],
        );
 
        //// Uncomment the below to run the seeder
         DB::table('clients')->insert($clients);
         DB::commit();
         //DB::statement('SET IDENTITY_INSERT clients OFF;');
        }
        catch(Exception $e) {
            DB::rollback();
        }
    }
 
}

 
class UsersTableSeeder extends Seeder {
 
    public function run()
        {
            try {
            DB::beginTransaction();
            DB::statement('SET IDENTITY_INSERT users ON;');
            DB::table('users')->delete();

            $users = array(
            ['code' => 'HAOJ', 'username' => 'hojeks', 'email' => 'hojeks@nouvia.io', 'password' => Hash::make('secret'), 'client_id' =>1, 'role_id' =>1, 'remember_token' =>0, 'created_at' => new DateTime, 'updated_at' => new DateTime]
            );

            //'password' => Hash::make('unions')
            DB::table('users')->insert($users);
            DB::commit();
            //DB::statement('SET IDENTITY_INSERT users OFF;');
            }
            catch(Exception $e) {
            DB::rollback();
        
          }
        }
 
}

?>