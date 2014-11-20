use Rack::Static,
  :urls => ["/images", "/js", "/css", "/fonts"],
  :root => "public"

map "/" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/index.html', File::RDONLY)
    ]
  }
end

map "/google8ed2a52e63b55c0b.html" do
  run lambda { |env|
    [
      200,
      {
        'Content-Type'  => 'text/html',
        'Cache-Control' => 'public, max-age=86400'
      },
      File.open('public/google8ed2a52e63b55c0b.html', File::RDONLY)
    ]
  }
end
