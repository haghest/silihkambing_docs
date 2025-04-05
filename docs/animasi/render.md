---
title: "Panduan Render"
description: "Panduan yang harus di cek sebelum render."
---
# Panduan Render
Panduan yang harus di cek sebelum render.
## Render menggunakan EEVEE
Semua animasi dirender menggunakan ```EEVEE``` agar lebih cepat. Pastikan bukan Cycles.

## Resolusi 1080p
Pastikan sudah menggunakan resolusi ```1920x900``` pada menu **Output Properties**
<img src="/resolusi_blender.png" />

## Color Management 
Ubah View Transform dari ```Filmic``` ke ```Standard``` pada halaman **Render Properties**, scroll kebawah ubah seperti setting pada di gambar. Ini agar tidak perlu melakukan color grade lagi dan mengeluarkan warna kontras kartun pada hasil render.
<img src="/color_blender.png" />

## Menggunakan .mp4
Pada menu **Output Properties**, pastikan pilih dimana file akan disimpan terlebih dahulu. Lalu ubah File format ke ```FFmpeg Video``` dan buka tab **Encoding** lalu pilih Container ```MPEG-4```
<img src="/render_blender.png" />
