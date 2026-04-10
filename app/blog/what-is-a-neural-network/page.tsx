import Link from "next/link";

export default function WhatIsANeuralNetwork() {
  return (
    <main className="flex flex-col w-full max-w-2xl mx-auto px-6 py-16 gap-10 font-mono">
      <div>
        <Link href="/blog" className="text-xs text-[#555] hover:text-[#aaa] transition-colors">
          ← back
        </Link>
      </div>

      <div className="flex flex-col gap-2">
<h1 className="text-xl font-normal text-white leading-snug">what is a neural network?</h1>
        <p className="text-xs text-[#333] mt-1">nov 2022</p>
      </div>

      <div className="flex flex-col gap-8 text-sm text-[#aaa] leading-relaxed">

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">where does this fit?</p>
          <p>
            Neural networks sit inside <span className="text-white">deep learning</span>, which sits
            inside <span className="text-white">machine learning</span>. The distinction matters.
          </p>
          <p>
            Machine learning is the broader idea: instead of writing explicit rules, you give a
            system data and let it figure out the patterns. A spam filter that learns from
            examples rather than a hand-coded list of bad words — that&apos;s machine learning.
          </p>
          <p>
            Deep learning is a specific approach within ML that uses neural networks with many
            layers. The key difference from traditional ML is feature engineering. In classical
            ML, a human has to decide what the model pays attention to — you extract relevant
            features from the raw data yourself, then hand those to the model. In deep learning,
            the network learns what to pay attention to directly from the raw data. You don&apos;t tell
            it what matters. It figures that out too.
          </p>
          <p>
            That&apos;s both the power and the mystery of it. Neural networks are the architecture that
            makes deep learning possible.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">it&apos;s just trying to find an equation</p>
          <p>
            Before getting into the mechanics, here&apos;s the one idea that made everything else
            click for me: a neural network is just trying to estimate an equation.
          </p>
          <p>
            Think about what we&apos;re actually asking it to do. You have some inputs and you want
            some output. There&apos;s some equation that maps one to the other. You just don&apos;t know
            what it is.
          </p>
          <p>
            Maybe you&apos;re predicting house prices from square footage and location. Maybe you&apos;re
            classifying emails as spam or not. The inputs change, the outputs change, but the
            core problem is always the same: find the equation that connects them.
          </p>
          <p>
            Sometimes that equation is simple enough to write by hand. But often the relationship
            between inputs and outputs is so complex — so many variables interacting in non-obvious
            ways — that no human could reasonably derive it.
          </p>
          <p>
            A neural network is a machine for estimating that equation. You define the rough shape
            of it — the architecture — and then feed it enough examples until it figures out the
            specific numbers that make it work.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">where did this idea even come from?</p>
          <p>
            Not from nowhere. The inspiration was biological — the brain itself.
          </p>
          <p>
            In 1943, Warren McCulloch (a neuroscientist) and Walter Pitts (a mathematician) looked
            at how neurons in the brain actually work: a neuron receives signals from other neurons,
            and if those signals are strong enough, it &ldquo;fires&rdquo; and passes a signal forward. They
            took that and turned it into math — a simple artificial neuron model that could do the
            same thing.
          </p>
          <p>
            The logic wasn&apos;t random. It was deliberate. The brain can recognize faces, understand
            language, and learn from experience — and it&apos;s made entirely of neurons. So the question
            they were asking was: <span className="text-white">can we simulate that in math?</span> Everything
            else followed from that.
          </p>
          <p>
            Others built on it from there. Frank Rosenblatt built the Perceptron in 1958 — one of
            the first neural network models that could actually be trained. Decades later, Geoffrey
            Hinton, Yann LeCun, and Yoshua Bengio figured out how to make deep networks learn well
            at scale. They&apos;re often called the &ldquo;Godfathers of Deep Learning&rdquo; for good reason.
          </p>
          <p>
            The irony is that modern neural networks have drifted pretty far from how real brains
            actually work. But the biological metaphor is still where the name came from — and
            more importantly, it&apos;s where the original intuition came from. Someone looked at the
            brain and thought: what if we could build that?
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">what a neuron actually is</p>
          <p>
            A neuron is just a container for a number between 0 and 1. That number is called
            its <span className="text-white">activation</span>. Nothing more mysterious than that.
          </p>
          <p>
            The inputs to the network are neurons. The outputs are neurons too. Everything in
            between — the processing, the pattern-matching, the &ldquo;thinking&rdquo; — is just activations
            flowing from one layer of neurons to the next.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">layers</p>
          <p>
            A neural network is organized into layers: an input layer, one or more hidden layers,
            and an output layer. You feed data into the input layer, it flows through the hidden
            layers, and the output layer gives you the answer.
          </p>
          <p>
            To make this concrete — the classic teaching example is handwritten digit recognition.
            The input is a 28×28 pixel image, so the input layer has 784 neurons, one per pixel.
            The output layer has 10 neurons, one for each digit 0–9. Whatever output neuron has
            the highest activation at the end is the network&apos;s guess.
          </p>
          <div className="flex flex-col gap-1 pl-4 border-l border-[#222] text-[#666]">
            <p>input layer — 784 neurons</p>
            <p>hidden layer 1 — 16 neurons</p>
            <p>hidden layer 2 — 16 neurons</p>
            <p>output layer — 10 neurons</p>
          </div>
          <p>
            The hidden layers are where the interesting stuff happens — and also where the name
            becomes a bit ironic. They&apos;re hidden in the sense that we don&apos;t directly control
            what they learn. We just give the network data and let it figure it out.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">why layers, though?</p>
          <p>
            Here&apos;s the intuition — and it&apos;s worth flagging upfront that this is just intuition.
            We don&apos;t actually know what&apos;s happening inside the hidden layers. We can&apos;t look at a
            weight and read off what it &ldquo;means.&rdquo; The network is, in a very real sense, a black box.
          </p>
          <p>
            But the hope — and the reason this architecture makes sense — is something like this:
            recognizing a digit probably isn&apos;t one big leap. The first hidden layer might be
            picking up on edges. The second might be combining those into loops and curves. By the
            output layer, the network might be reasoning about high-level features: &ldquo;loop at the
            top, tail at the bottom — probably a 9.&rdquo;
          </p>
          <p>
            Maybe. We don&apos;t know for sure. What we do know is that depth works — stacking layers
            consistently produces better results than a single wide layer. The hierarchical story
            is our best guess at why. The math doesn&apos;t tell us; the results just keep showing up.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">weights and biases</p>
          <p>
            Every neuron in one layer connects to every neuron in the next layer. Each connection
            has a <span className="text-white">weight</span> — a number that says how much the source
            neuron&apos;s activation should influence the destination neuron.
          </p>
          <p>
            To compute a neuron&apos;s activation, you take a weighted sum of all the activations in
            the previous layer:
          </p>
          <div className="pl-4 border-l border-[#222] text-[#666] text-xs leading-loose">
            <p>activation = w₁a₁ + w₂a₂ + w₃a₃ + ... + wₙaₙ</p>
          </div>
          <p>
            Positive weight → this neuron gets more excited when that neuron is active. Negative
            weight → it gets suppressed. Zero → it doesn&apos;t care.
          </p>
          <p>
            But weights alone aren&apos;t enough. Sometimes you want a neuron to only activate when
            the weighted sum crosses a certain threshold — not just when it&apos;s positive. That&apos;s
            what the <span className="text-white">bias</span> is for. You add a bias term to shift
            the threshold:
          </p>
          <div className="pl-4 border-l border-[#222] text-[#666] text-xs leading-loose">
            <p>activation = w₁a₁ + w₂a₂ + ... + wₙaₙ + b</p>
          </div>
          <p>
            A negative bias means the neuron needs a strong signal before it fires. A positive
            bias means it fires more easily. Together, weights and biases give each neuron a lot
            of expressive power.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">squishing it into 0–1: the activation function</p>
          <p>
            There&apos;s a problem. That weighted sum can produce any number — large positive, large
            negative, anything. But activations are supposed to be between 0 and 1.
          </p>
          <p>
            So you pass the result through an <span className="text-white">activation function</span> that
            squishes it into that range. The classic one is the <span className="text-white">sigmoid</span>:
          </p>
          <div className="pl-4 border-l border-[#222] text-[#666] text-xs leading-loose">
            <p>σ(x) = 1 / (1 + e⁻ˣ)</p>
          </div>
          <p>
            Very large positive number → output near 1. Very large negative number → output near
            0. Around zero → something in between. It&apos;s a smooth S-curve.
          </p>
          <p>
            Modern networks mostly use <span className="text-white">ReLU</span> (Rectified Linear Unit)
            instead — it&apos;s simpler:
          </p>
          <div className="pl-4 border-l border-[#222] text-[#666] text-xs leading-loose">
            <p>ReLU(x) = max(0, x)</p>
          </div>
          <p>
            Negative input → 0. Positive input → pass it through unchanged. It sounds almost too
            simple to work, but it trains faster and avoids some nasty mathematical problems that
            sigmoid runs into with deep networks.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">how many numbers are we talking?</p>
          <p>
            Let&apos;s count the weights and biases for the 784 → 16 → 16 → 10 network:
          </p>
          <div className="flex flex-col gap-1 pl-4 border-l border-[#222] text-[#666]">
            <p>784 × 16 weights + 16 biases = 12,560</p>
            <p>16 × 16 weights + 16 biases = 272</p>
            <p>16 × 10 weights + 10 biases = 170</p>
            <p className="text-[#555] mt-1">total: 13,002 parameters</p>
          </div>
          <p>
            13,002 numbers. That&apos;s the entire intelligence of this network — packed into 13,002
            weights and biases. Training the network means finding values for all of them that
            make the outputs correct. We haven&apos;t gotten to how that works yet — that&apos;s the next
            post.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-[#555] uppercase tracking-widest">the thing that clicked for me</p>
          <p>
            So those 13,002 numbers — the weights and biases — are the equation. Not a formula a
            human wrote, but one the network estimated from data, one small adjustment at a time.
          </p>
          <p>
            What&apos;s wild is that this same approach scales. Swap out the 784 pixel inputs for
            billions of text tokens, scale up the layers, and you get something that can estimate
            far more complex functions — like predicting the next word in a sentence. The
            architecture changes, but the core idea doesn&apos;t.
          </p>
          <p>
            That process — figuring out the right nudges — is backpropagation. Next up.
          </p>
        </div>

      </div>
    </main>
  );
}
