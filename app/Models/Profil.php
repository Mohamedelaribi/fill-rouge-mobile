<?php

namespace App\Models;

use App\Models\Utilisateur;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Profil extends Model
{
    use HasFactory;
// 
    protected $table = 'profils';

    protected $primarykey = 'id';

    protected $fillable = ['id','nameProfil'];

    public function utilisateurs(){
        return $this->hasMany(Utilisateur::class);
    }
}
