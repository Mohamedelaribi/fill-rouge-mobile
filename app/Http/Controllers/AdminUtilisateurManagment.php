<?php

namespace App\Http\Controllers;

use App\Models\Profil;
use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminUtilisateurManagment extends Controller
{
    
    public function index()
    {
        $getAllUtilisateurs = DB::table('utilisateurs')
        ->join('profils', 'profils.id', '=', 'utilisateurs.profil_id')
        ->select('utilisateurs.id',
        'utilisateurs.nomComplet',
        'utilisateurs.email',
        'utilisateurs.telephone',
        'utilisateurs.mot_de_passe',
        'profils.nameProfil')
        ->get();

        $getProfils = Profil::all();
        return response()->json([
            'Profils' => $getProfils,
            'Utilisateurs' => $getAllUtilisateurs
        ]);

    }


    public function getProfils(){
        $getProfils = Profil::all();
        return response()->json($getProfils);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
