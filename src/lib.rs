use wasm_bindgen::prelude::*;
#[wasm_bindgen]

// 	Stern's diatomic series https://oeis.org/A002487
pub fn stern(n: u32) -> u32 { 
	if n == 0 || n == 1 {
		n
	}
	else if n % 2 == 0 {
		stern(n / 2)
	}
	else {
		let n1 = stern((n - 1) / 2);
		let n2 = stern((n + 1) / 2);
		n1 + n2
	}
} 

// Hofstadter Q-sequence https://oeis.org/A005185
pub fn hof(n: u32) -> u32 {
	if n == 0 {
		0
	}
	else if n == 1 || n == 2 {
		1
	} else {
		hof(n - hof(n - 1)) + hof(n - hof(n - 2))
	}
}



