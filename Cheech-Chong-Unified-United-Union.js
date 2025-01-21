var defineProperty = Object.defineProperty;
var setProperty = (s, t, x) => t in s ? defineProperty(s, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: x
}) : s[t] = x;
var a = (s, t, x) => setProperty(s, typeof t != "symbol" ? t + "" : t, x);
function m() {
	var s = ["3229794MiNwlT", "size", "280379BbIfKA", "38045wwAYDA", "isFood", "9538188uxyWIb", "extraData", "isFriend", "isVirus", "8wpuvKa", "29361WUScvp", "354ruMVqs", "10ugSFoX", "name", "244Dviqny", "extendedFlags", "4236450cVjlwG", "878272idmghX", "2opctKB"];
	return m = function() {
		return s
	}
	,
	m()
}
var w = g;
function g(s, t) {
	var x = m();
	return g = function(e, n) {
		e = e - 335;
		var i = x[e];
		return i
	}
	,
	g(s, t)
}
(function(s, t) {
	for (var x = g, e = s(); ; )
		try {
			var n = -parseInt(x(339)) / 1 * (-parseInt(x(338)) / 2) + -parseInt(x(350)) / 3 * (-parseInt(x(335)) / 4) + -parseInt(x(337)) / 5 + -parseInt(x(351)) / 6 * (-parseInt(x(343)) / 7) + -parseInt(x(349)) / 8 * (-parseInt(x(340)) / 9) + parseInt(x(352)) / 10 * (-parseInt(x(342)) / 11) + -parseInt(x(345)) / 12;
			if (n === t)
				break;
			e.push(e.shift())
		} catch {
			e.push(e.shift())
		}
}
)(m, 487182);
var C, F, O, K, D, N, j;
j = w(341),
N = w(336),
D = w(353),
K = w(346),
O = w(348),
F = w(344),
C = w(347);
class u0 {
	constructor() {
		a(this, "id");
		a(this, "x");
		a(this, "y");
		a(this, j);
		a(this, "flags");
		a(this, N);
		a(this, D);
		a(this, K);
		a(this, O);
		a(this, F);
		a(this, C);
		var t = w;
		this.id = 0,
		this.x = 0,
		this.y = 0,
		this[t(341)] = 0,
		this.flags = 0,
		this.extendedFlags = 0,
		this.name = "",
		this[t(346)] = "",
		this[t(348)] = !1,
		this[t(344)] = !1,
		this[t(347)] = !1
	}
}
const u = M;
function I() {
	const s = ["12872fQiczo", "5562ZgwXkH", "getUint32", "byteOffset", "353195LXOvwY", "498UruIEa", "519740VSTgIu", "readUint16", "2205vgyuTM", "getInt32", "readFloat64", "dataView", "readUint32", "fromCharCode", "readUint8", "readInt32", "1269hqrKLk", "2496935HIbcYy", "getUint16", "488kAckre", "437408jZmNyd", "readString"];
	return I = function() {
		return s
	}
	,
	I()
}
(function(s, t) {
	const x = M
	  , e = s();
	for (; ; )
		try {
			if (parseInt(x(438)) / 1 + parseInt(x(454)) / 2 + parseInt(x(439)) / 3 * (parseInt(x(453)) / 4) + -parseInt(x(442)) / 5 * (parseInt(x(457)) / 6) + parseInt(x(451)) / 7 + -parseInt(x(456)) / 8 * (parseInt(x(450)) / 9) + parseInt(x(440)) / 10 === t)
				break;
			e.push(e.shift())
		} catch {
			e.push(e.shift())
		}
}
)(I, 365154);
function M(s, t) {
	const x = I();
	return M = function(e, n) {
		return e = e - 436,
		x[e]
	}
	,
	M(s, t)
}
var z, L;
class E {
	constructor(t) {
		a(this, L);
		a(this, z);
		const x = u;
		this.dataView = new DataView(t),
		this[x(437)] = 0
	}
	[(L = u(445),
	z = u(437),
	u(448))]() {
		return this.dataView.getUint8(this.byteOffset++)
	}
	[u(441)]() {
		const t = u
		  , x = this[t(445)][t(452)](this[t(437)], !0);
		return this[t(437)] += 2,
		x
	}
	[u(446)]() {
		const t = u
		  , x = this.dataView[t(436)](this[t(437)], !0);
		return this.byteOffset += 4,
		x
	}
	[u(449)]() {
		const t = u
		  , x = this[t(445)][t(443)](this[t(437)], !0);
		return this[t(437)] += 4,
		x
	}
	[u(444)]() {
		const t = u
		  , x = this[t(445)].getFloat64(this[t(437)], !0);
		return this[t(437)] += 8,
		x
	}
	[u(455)]() {
		const t = u;
		let x = "";
		for (; ; ) {
			const e = this[t(448)]();
			if (e === 0)
				break;
			x += String[t(447)](e)
		}
		return x
	}
}
function k() {
	const s = ["writeString", "1CUcpoD", "writeInt32", "293555QTBkCA", "buffer", "charCodeAt", "56mPpaqN", "setUint8", "setUint32", "60556CZctZK", "557459tLlSKm", "16DsMFuQ", "writeUint32", "setInt32", "byteOffset", "dataView", "writeUint8", "451179htlEtW", "slice", "toBuffer", "2273990jLzELa", "579384NsAxsl", "writeFloat64", "1494222umiapF", "length"];
	return k = function() {
		return s
	}
	,
	k()
}
const b = A;
function A(s, t) {
	const x = k();
	return A = function(e, n) {
		return e = e - 165,
		x[e]
	}
	,
	A(s, t)
}
(function(s, t) {
	const x = A
	  , e = s();
	for (; ; )
		try {
			if (parseInt(x(184)) / 1 * (parseInt(x(167)) / 2) + -parseInt(x(181)) / 3 + parseInt(x(189)) / 4 * (parseInt(x(186)) / 5) + parseInt(x(179)) / 6 + -parseInt(x(168)) / 7 + parseInt(x(169)) / 8 * (-parseInt(x(175)) / 9) + parseInt(x(178)) / 10 === t)
				break;
			e.push(e.shift())
		} catch {
			e.push(e.shift())
		}
}
)(k, 498222);
var P, W;
class v {
	constructor(t) {
		a(this, W);
		a(this, P);
		const x = b;
		this.dataView = new DataView(new ArrayBuffer(t)),
		this[x(172)] = 0
	}
	[(W = b(173),
	P = b(172),
	b(174))](t) {
		const x = b;
		this[x(173)][x(165)](this[x(172)]++, t)
	}
	[b(185)](t) {
		const x = b;
		this[x(173)][x(171)](this[x(172)], t, !0),
		this[x(172)] += 4
	}
	[b(170)](t) {
		const x = b;
		this.dataView[x(166)](this[x(172)], t, !0),
		this.byteOffset += 4
	}
	[b(180)](t) {
		this[b(173)].setFloat64(this.byteOffset, t, !0),
		this.byteOffset += 8
	}
	[b(183)](t) {
		const x = b;
		for (let e = 0; e < t[x(182)]; e++)
			this[x(174)](t[x(188)](e));
		this.writeUint8(0)
	}
	[b(177)]() {
		const t = b;
		return this.dataView[t(187)][t(176)](0, this[t(172)])
	}
}
const o = S;
(function(s, t) {
	const x = S
	  , e = s();
	for (; ; )
		try {
			if (-parseInt(x(548)) / 1 * (-parseInt(x(552)) / 2) + -parseInt(x(496)) / 3 * (-parseInt(x(516)) / 4) + parseInt(x(506)) / 5 * (parseInt(x(472)) / 6) + parseInt(x(550)) / 7 + parseInt(x(511)) / 8 + -parseInt(x(500)) / 9 + -parseInt(x(452)) / 10 === t)
				break;
			e.push(e.shift())
		} catch {
			e.push(e.shift())
		}
}
)(U, 776696);
function S(s, t) {
	const x = U();
	return S = function(e, n) {
		return e = e - 447,
		x[e]
	}
	,
	S(s, t)
}
var X, q, Y, R, H, Q, Z, J, G, $, x0, t0, e0, s0, n0, i0;
class p0 {
	constructor(t) {
		a(this, "ws");
		a(this, i0);
		a(this, n0);
		a(this, s0);
		a(this, "moveInt");
		a(this, e0);
		a(this, t0);
		a(this, x0);
		a(this, $);
		a(this, "serverVersion");
		a(this, G);
		a(this, J);
		a(this, Z);
		a(this, Q);
		a(this, "protocolVersion");
		a(this, "followMouseTimeout");
		a(this, H);
		a(this, R);
		a(this, Y);
		a(this, q);
		a(this, X);
		const x = o;
		this.ws = null,
		this[x(508)] = t,
		this[x(509)] = 0,
		this[x(541)] = 0,
		this.name = "EvoBots",
		this[x(529)] = null,
		this[x(495)] = !1,
		this[x(477)] = !1,
		this[x(465)] = [],
		this[x(546)] = 0,
		this[x(463)] = 0,
		this.serverVersion = null,
		this[x(491)] = !1,
		this[x(515)] = [],
		this[x(543)] = null,
		this[x(505)] = 31116,
		this.protocolVersion = 23,
		this[x(492)] = null,
		this.followMouseTimeout = null,
		this[x(524)] = {
			x: 0,
			y: 0
		},
		this[x(483)]()
	}
	[(i0 = o(509),
	n0 = o(541),
	s0 = o(447),
	e0 = o(477),
	t0 = o(465),
	x0 = o(546),
	$ = o(463),
	G = o(491),
	J = o(515),
	Z = o(543),
	Q = o(505),
	H = o(524),
	R = o(508),
	Y = o(478),
	q = o(492),
	X = o(495),
	o(470))]() {
		const t = o;
		this.ws = null,
		this[t(509)] = 0,
		this.offsetY = 0,
		this.isAlive = !1,
		this[t(465)] = [],
		this[t(546)] = 0,
		this.decryptionKey = 0,
		this.serverVersion = null,
		this[t(491)] = !1,
		this[t(515)] = [],
		this.errorTimeout = null,
		this.followMouseTimeout = null
	}
	connect() {
		const t = o;
		this[t(470)](),
		!this.stopped && (this.ws = new WebSocket(this[t(508)].agarServer),
		this.ws[t(454)] = t(482),
		this.ws[t(464)] = this.onopen[t(497)](this),
		this.ws[t(480)] = this.onclose[t(497)](this),
		this.ws[t(473)] = this.onerror[t(497)](this),
		this.ws[t(487)] = this[t(487)][t(497)](this))
	}
	[o(464)]() {
		const t = o;
		this[t(493)](),
		this[t(499)]()
	}
	[o(480)]() {
		this[o(512)]()
	}
	[o(473)]() {
		const t = o;
		this[t(543)] = setTimeout( () => {
			var e, n;
			const x = t;
			(((e = this.ws) == null ? void 0 : e[x(551)]) === WebSocket[x(542)] || ((n = this.ws) == null ? void 0 : n[x(551)]) === WebSocket[x(520)]) && this.ws[x(475)]()
		}
		, 1e3)
	}
	[o(521)](t) {
		const x = o;
		this.ws && (this[x(546)] && (t = this[x(525)](t, this[x(546)]),
		this[x(546)] = this[x(449)](this[x(546)])),
		this.ws[x(551)] == 1 && this.ws.send(t))
	}
	[o(487)](t) {
		const x = o;
		let e = t[x(494)];
		this[x(463)] && (e = this[x(525)](e, this.decryptionKey ^ this[x(505)])),
		this[x(514)](e)
	}
	[o(514)](t) {
		const x = o
		  , e = new E(t);
		switch (e.readUint8()) {
		case 32:
			this[x(515)][x(510)](e[x(450)]()),
			this.isAlive || (this[x(477)] = !0,
			!this[x(508)][x(519)] && this.config[x(545)] && (this[x(508)][x(519)] = !0)),
			this[x(529)] = setInterval( () => {
				const i = x;
				this.move(this[i(508)][i(458)])
			}
			, 50),
			!this[x(528)] && (this[x(528)] = setTimeout( () => {
				this[x(477)] && (this.followMouse = !0)
			}
			, 1e4));
			break;
		case 241:
			this[x(463)] = e[x(450)](),
			this[x(537)] = e.readString(),
			this.encryptionKey = this.murmur2("" + this[x(508)][x(467)][x(448)](/wss:\/\/(web-arenas-live-[\w-]+\.agario\.miniclippt\.com\/[\w-]+\/[\d-]+)/)[1] + this.serverVersion, 255);
			break;
		case 242:
			this[x(451)]();
			break;
		case 255:
			this.handleMessage(this.uncompressMessage(new Uint8Array(e.dataView.buffer[x(468)](5)), new Uint8Array(e[x(450)]())).buffer);
			break
		}
	}
	[o(522)](t) {
		const x = o
		  , e = new E(t);
		switch (e.readUint8()) {
		case 16:
			this[x(549)](e);
			break;
		case 64:
			this.updateOffset(e);
			break
		}
	}
	[o(460)](t) {
		const x = o
		  , e = t.readFloat64()
		  , n = t[x(534)]()
		  , i = t[x(534)]()
		  , r = t[x(534)]();
		i - e > 14e3 && (this[x(509)] = (i + e) / 2),
		r - n > 14e3 && (this[x(541)] = (r + n) / 2)
	}
	[o(549)](t) {
		const x = o
		  , e = t.readUint16();
		for (let i = 0; i < e; i++)
			t[x(474)] += 8;
		for (; ; ) {
			const i = t[x(450)]();
			if (i === 0)
				break;
			const r = new u0;
			r.id = i,
			r.x = t[x(539)](),
			r.y = t[x(539)](),
			r[x(501)] = t[x(513)]();
			const c = t[x(517)]()
			  , f = c & 128 ? t[x(517)]() : 0;
			c & 1 && (r[x(455)] = !0),
			c & 2 && (t[x(474)] += 3),
			c & 4 && t[x(544)](),
			c & 8 && (r[x(447)] = decodeURIComponent(escape(t[x(544)]()))),
			f & 1 && (r[x(459)] = !0),
			f & 2 && (r[x(489)] = !0),
			f & 4 && (t[x(474)] += 4),
			this[x(465)][r.id] = r
		}
		const n = t[x(513)]();
		for (let i = 0; i < n; i++) {
			const r = t.readUint32();
			this[x(515)][x(530)](r) && this[x(515)].splice(this[x(515)][x(532)](r), 1),
			delete this[x(465)][r]
		}
		this.isAlive && this[x(515)][x(553)] === 0 && (this[x(477)] = !1,
		this.followMouseTimeout && (clearTimeout(this[x(528)]),
		this[x(528)] = null),
		this[x(491)] = !1,
		this.spawn())
	}
	[o(486)](t, x, e, n) {
		const i = o;
		let r = 1 / 0
		  , c = null;
		for (const f of Object[i(469)](this[i(465)])) {
			let l = !1;
			switch (t) {
			case i(459):
				l = !f[i(489)] && !f[i(455)] && f[i(459)] && !f[i(447)];
				break;
			case i(455):
				l = !f.isFood && !f[i(489)] && f[i(455)] && !f[i(447)];
				break;
			case i(476):
				l = !f[i(459)] && !f[i(489)] && !f[i(455)] && f.name[i(553)] > 0 && f.size > n * 1.15;
				break
			}
			if (l) {
				const p = this[i(461)](x, e, f.x, f.y);
				p < r && (r = p,
				c = f)
			}
		}
		return {
			distance: r,
			entity: c
		}
	}
