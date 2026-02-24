{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "whimsy.asteria.cat";

  packages = with pkgs; [
    nodejs_20
    pnpm
  ];

  shellHook = ''
    export NODE_OPTIONS="--max_old_space_size=4096"

    if [ ! -d node_modules ]; then
      echo "Installing dependencies..."
      pnpm install
      echo "Starting dev server..."
      pnpm dev
    fi

    echo "Boop!"
  '';
}