// Author:
// Title:

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform sampler2D iChannel0;
uniform float u_time;

precision highp float;

 float time = u_time * 2.;
 vec2 resolution  = u_resolution;

float field(in vec3 p,float s) {
	float strength = 7. + .03 * log(1.e-6 + fract(sin(time) * 4373.11));
	float accum = s/4.;
	float prev = 0.;
	float tw = 0.;
	for (int i = 0; i < 26; ++i) {
		float mag = dot(p, p);
		float w = exp(-float(i) / 7.);
		p = abs(p) / mag + vec3(-.5, -.4, -1.5);
		accum += w * exp(-strength * pow(abs(mag - prev), 2.2));
		tw += w;
		prev = mag;
	}
	return max(0., 5. * accum / tw - .7) + 0.2;
}

float field2(in vec3 p, float s) {
	float strength = 7. + .03 * log(1.e-6 + fract(sin(time) * 4373.11));
	float accum = s/4.;
	float prev = 0.;
	float tw = 0.;
	for (int i = 0; i < 23; ++i) {
		float mag = dot(p, p);
		p += abs(p) / mag + vec3(-.5, -.4, -1.5);
		float w = exp(-float(i) / 7.);
		accum += w * exp(-strength * pow(abs(mag - prev), 2.2));
		tw += w;
		prev = mag;
	}
	return max(0., 5. * accum / tw - .7);
}

vec3 nrand3( vec2 co ) {
	vec3 a = fract(cos(co.x*0.3e-3 + co.y * vec3(12.,87.,1.0)) * vec3(1.3e5, 4.7e5, 2.9e5) * fract(sin(dot(co,vec2(12.8697,776.1243)))));
	vec3 b = fract(sin(co.x*8.3e-3 + co.y * vec3(12.,87.,1.0)) * vec3(8.1e5, 1.0e5, 0.1e5) * floor(sin(dot(co,vec2(26.7416,17.8943)))));
	vec3 c = mix(a, b, 0.2);
	return c;
}


void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
	vec2 uv = 2. * fragCoord.xy / resolution.xy - 1.;
	vec2 uvs = uv * resolution.xy / max(resolution.x, resolution.y);
	vec3 p = vec3(uvs / 4., 0) + vec3(1., -1.3, 0.);
	p += .2 * vec3(sin(time / 16.), sin(time / 12.),  sin(time / 128.));

	float freqs[4];
	freqs[0] = 0.02;
	freqs[1] = 0.27;//GREEN
	freqs[2] = 0.0;//GREEN
	freqs[3] = 0.762;//BLUE

	float t = field(p,freqs[2]);
	float v = (1. - exp((abs(uv.x) - 1.) * 6.)) * (1. - exp((abs(uv.y) - 1.) * 6.));

	vec3 p2 = vec3(uvs / (4.+sin(time*0.11)*0.2+0.2+sin(time*0.15)*0.3+0.4), 1.5) + vec3(2., -1.3, -1.);
	p2 += 0.25 * vec3(sin(time / 16.), sin(time / 12.),  sin(time / 128.));
	float t2 = field2(p2,freqs[3]);
	vec4 c2 = mix(.4, 0.5, v) * vec4(0.8 * t2 * t2 * t2 , 1.5 * t2 * t2 , 1.5 * t2, t2);


	vec2 seed = p.xy * 2.0;
	seed = floor(seed * resolution.x);
	vec3 rnd = nrand3( seed );
	vec4 starcolor = vec4(pow(rnd.y,40.0));

	vec2 seed2 = p2.xy * 2.0;
	seed2 = floor(seed2 * resolution.x);
	vec3 rnd2 = nrand3( seed2 );
	starcolor += vec4(pow(rnd2.y,40.0));

	fragColor = mix(freqs[3]-.3, 1., v) * vec4(1.5*freqs[2] * t * t* t , 1.2*freqs[1] * t * t, freqs[3]*t, 1.0)+c2+starcolor;
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}